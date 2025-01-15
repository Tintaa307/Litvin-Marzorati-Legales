// app/oauth/callback/route.ts
import { createClient } from "@/lib/supabase/server"
import { cookies } from "next/headers" // para leer/escribir cookies en App Router
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  const stateFromQuery = searchParams.get("state")
  const supabase = createClient()

  if (!code || !stateFromQuery) {
    return NextResponse.json(
      { error: "Faltan parámetros code o state en la URL" },
      { status: 400 }
    )
  }

  const clientId = process.env.CLIENT_MP_ID
  const clientSecret = process.env.CLIENT_MP_SECRET
  const redirectUri = process.env.MP_REDIRECT_URI

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.json(
      { error: "Faltan variables de entorno" },
      { status: 500 }
    )
  }

  // 1. Leer cookies
  const cookieStore = cookies()
  const body = cookieStore.get("code_verifier&state")?.value.split("&")
  const codeVerifier = body?.[0]
  const stateFromCookie = body?.[1]
  console.log("codeVerifier", codeVerifier)
  console.log("stateFromCookie", stateFromCookie)

  if (!codeVerifier || !stateFromCookie) {
    return NextResponse.json(
      { error: "No se encontró code_verifier o state en las cookies." },
      { status: 400 }
    )
  }

  // 2. Validar que el state coincide
  if (stateFromCookie !== stateFromQuery) {
    return NextResponse.json(
      { error: "El state de la cookie no coincide con el de la URL." },
      { status: 400 }
    )
  }

  // 3. Intercambiamos code + code_verifier por un access_token
  const bodyParams = new URLSearchParams()
  bodyParams.set("grant_type", "authorization_code")
  bodyParams.set("client_id", clientId)
  bodyParams.set("client_secret", clientSecret)
  bodyParams.set("code", code)
  bodyParams.set("redirect_uri", redirectUri)
  bodyParams.set("code_verifier", codeVerifier)

  const tokenResponse = await fetch("https://api.mercadopago.com/oauth/token", {
    method: "POST",
    body: bodyParams,
  })

  if (!tokenResponse.ok) {
    const errorData = await tokenResponse.json()
    return NextResponse.json(
      { error: "Error al intercambiar code por token", details: errorData },
      { status: 400 }
    )
  }

  const data = await tokenResponse.json()
  // data = { access_token, token_type, expires_in, scope, user_id, refresh_token? }

  const { error } = await (await supabase).from("oauth-tokens").insert({
    user_id: data.user_id,
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    token_type: data.token_type,
  })

  if (error) {
    return NextResponse.json(
      {
        error: "Error al guardar el token en la base de datos",
        details: error,
      },
      { status: 500 }
    )
  }

  const response = NextResponse.json({
    message: "Autorización exitosa.",
  })
  response.cookies.set("myapp_code_verifier", "", { maxAge: 0 })
  response.cookies.set("myapp_state", "", { maxAge: 0 })

  return response
}

// app/oauth/callback/route.ts
import { NextRequest, NextResponse } from "next/server"

const MP_TOKEN_URL = "https://api.mercadopago.com/oauth/token"

// Solo un ejemplo. En producción, usar DB u otra solución persistente.
const USER_ACCESS_TOKENS: Record<string, string> = {}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  // const state = searchParams.get('state'); // si lo usaste en authorize

  const clientId = process.env.CLIENT_MP_ID
  const clientSecret = process.env.CLIENT_MP_SECRET
  const redirectUri = process.env.MP_REDIRECT_URI

  if (!code) {
    return NextResponse.json(
      { error: "No se recibió el code en la URL" },
      { status: 400 }
    )
  }

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.json(
      { error: "Faltan variables de entorno" },
      { status: 500 }
    )
  }

  try {
    // Solicitamos el access_token
    const bodyParams = new URLSearchParams()
    bodyParams.set("client_id", clientId)
    bodyParams.set("client_secret", clientSecret)
    bodyParams.set("grant_type", "authorization_code")
    bodyParams.set("code", code)
    bodyParams.set("redirect_uri", redirectUri)

    const response = await fetch(MP_TOKEN_URL, {
      method: "POST",
      body: bodyParams,
    })

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json(
        { error: "Error al obtener token", details: errorData },
        { status: 400 }
      )
    }

    const data = await response.json()
    // data contendrá { access_token, token_type, expires_in, scope, user_id, ... }
    console.log("Data de token:", data)

    // Guardamos el token en memoria (DEMO).
    // En tu caso, identifica al usuario localmente (ej.: session user, etc.)
    const userId = data.user_id.toString()
    USER_ACCESS_TOKENS[userId] = data.access_token

    return NextResponse.json({
      message: "Autorización exitosa.",
      user_id: userId,
      access_token: data.access_token,
    })
  } catch (error) {
    console.error("Error en callback:", error)
    return NextResponse.json({ error: "Error de servidor" }, { status: 500 })
  }
}

// app/oauth/callback/route.ts
import { NextRequest, NextResponse } from "next/server"

// Diccionario global para PKCE (de authorize)
const CODE_VERIFIERS: Record<string, string> = {}

// Diccionario global de tokens. En producción, usar DB.
const USER_ACCESS_TOKENS: Record<string, string> = {}

const MP_TOKEN_URL = "https://api.mercadopago.com/oauth/token"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  const state = searchParams.get("state") // el "state" enviado
  // Podrías tener un "error" si el usuario cancela, etc.

  if (!code || !state) {
    return NextResponse.json(
      { error: "Faltan parámetros code o state." },
      { status: 400 }
    )
  }

  const clientId = process.env.MP_CLIENT_ID
  const clientSecret = process.env.MP_CLIENT_SECRET
  const redirectUri = process.env.MP_REDIRECT_URI

  if (!clientId || !clientSecret || !redirectUri) {
    return NextResponse.json(
      { error: "Faltan variables de entorno" },
      { status: 500 }
    )
  }

  // Recuperamos el code_verifier que generamos en /authorize
  const codeVerifier = CODE_VERIFIERS[state]
  if (!codeVerifier) {
    return NextResponse.json(
      { error: "No se encontró un code_verifier para este state." },
      { status: 400 }
    )
  }

  try {
    // Intercambiamos code + code_verifier por access_token
    const bodyParams = new URLSearchParams()
    bodyParams.set("grant_type", "authorization_code")
    bodyParams.set("client_id", clientId)
    bodyParams.set("client_secret", clientSecret)
    bodyParams.set("code", code)
    bodyParams.set("redirect_uri", redirectUri)
    // ¡Clave para PKCE!
    bodyParams.set("code_verifier", codeVerifier)

    const response = await fetch(MP_TOKEN_URL, {
      method: "POST",
      body: bodyParams,
    })

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json(
        {
          error: "Error al obtener token de Mercado Pago",
          details: errorData,
        },
        { status: 400 }
      )
    }

    const data = await response.json()
    // Ej: data = { access_token, token_type, expires_in, scope, user_id, refresh_token? }

    // Opcionalmente, podrías guardar userId o algo
    const userId = data.user_id
      ? data.user_id.toString()
      : `mpuser_${Date.now()}`

    // Guardamos el access_token en memoria (DEMO)
    USER_ACCESS_TOKENS[userId] = data.access_token

    // Elimina el code_verifier para que no se use nuevamente
    delete CODE_VERIFIERS[state]

    // Muestra un resultado (puedes redirigir a tu “front” si prefieres)
    return NextResponse.json({
      message: "Autorización exitosa.",
      user_id: userId,
      access_token: data.access_token,
      // refresh_token: data.refresh_token, etc.
    })
  } catch (error) {
    console.error("Error en callback:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}

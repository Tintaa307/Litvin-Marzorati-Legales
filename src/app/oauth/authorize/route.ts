// app/oauth/authorize/route.ts
import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

function base64URLEncode(buffer: Buffer) {
  return buffer
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "")
}

function sha256(buffer: string) {
  return crypto.createHash("sha256").update(buffer).digest()
}

export async function GET(request: NextRequest) {
  const clientId = process.env.CLIENT_MP_ID
  const redirectUri = process.env.MP_REDIRECT_URI // p.ej: "https://tusitio.com/oauth/callback"

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: "Faltan variables de entorno" },
      { status: 500 }
    )
  }

  // 1. Generar code_verifier y code_challenge
  const codeVerifier = base64URLEncode(crypto.randomBytes(32))
  const codeChallenge = base64URLEncode(sha256(codeVerifier))

  // 2. Generar un "state" aleatorio
  const state = base64URLEncode(crypto.randomBytes(16))
  console.log(state)

  // 3. Construimos la URL de autorización
  const authUrl = new URL("https://auth.mercadopago.com/authorization")
  authUrl.searchParams.set("response_type", "code")
  authUrl.searchParams.set("client_id", clientId)
  authUrl.searchParams.set("redirect_uri", redirectUri)
  authUrl.searchParams.set("code_challenge", codeChallenge)
  authUrl.searchParams.set("code_challenge_method", "S256")
  authUrl.searchParams.set("platform_id", "mp")
  authUrl.searchParams.set("state", state)

  // 4. Preparamos la respuesta de redirección
  const response = NextResponse.redirect(authUrl.toString())

  response.cookies.set("myapp_state", state, {
    path: "/",
    httpOnly: true,
    sameSite: "none",
    secure: true,
  })

  response.cookies.set("myapp_code_verifier", codeVerifier, {
    path: "/",
    httpOnly: true,
    sameSite: "none",
    secure: true,
  })

  console.log("codeVerifier", codeVerifier)

  return response
}

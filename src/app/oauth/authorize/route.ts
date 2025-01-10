// app/oauth/authorize/route.ts
import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

// Diccionario global de code_verifiers asociados a un "state"
const CODE_VERIFIERS: Record<string, string> = {}

// Helpers para PKCE
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
  const clientId = process.env.MP_CLIENT_ID
  const redirectUri = process.env.MP_REDIRECT_URI // p.ej. "https://tusitio.com/oauth/callback"

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: "Faltan variables de entorno" },
      { status: 500 }
    )
  }

  // 1. Generar code_verifier y code_challenge
  const codeVerifier = base64URLEncode(crypto.randomBytes(32))
  const codeChallenge = base64URLEncode(sha256(codeVerifier))

  // 2. Generar un "state" aleatorio para correlacionar la respuesta
  const state = base64URLEncode(crypto.randomBytes(16))

  // 3. Guardamos el codeVerifier en un diccionario global (DEMO)
  CODE_VERIFIERS[state] = codeVerifier

  // 4. Construimos la URL de autorización con PKCE
  const authUrl = new URL("https://auth.mercadopago.com/authorization")
  authUrl.searchParams.set("response_type", "code")
  authUrl.searchParams.set("client_id", clientId)
  authUrl.searchParams.set("redirect_uri", redirectUri)
  authUrl.searchParams.set("code_challenge", codeChallenge)
  authUrl.searchParams.set("code_challenge_method", "S256")
  // El param platform_id es frecuente incluirlo
  authUrl.searchParams.set("platform_id", "mp")
  // state para identificar la respuesta
  authUrl.searchParams.set("state", state)

  // 5. Redirigimos
  return NextResponse.redirect(authUrl.toString())
}

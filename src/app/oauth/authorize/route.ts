// app/oauth/authorize/route.ts
import { NextRequest, NextResponse } from "next/server"

const MP_AUTH_URL = "https://auth.mercadopago.com/authorization"

export async function GET(request: NextRequest) {
  const clientId = process.env.CLIENT_MP_ID
  const redirectUri = process.env.MP_REDIRECT_URI

  if (!clientId || !redirectUri) {
    return NextResponse.json(
      { error: "Faltan variables de entorno" },
      { status: 500 }
    )
  }

  // Construimos la URL de autorización con los parámetros adecuados
  const url = new URL(MP_AUTH_URL)
  url.searchParams.set("client_id", clientId)
  url.searchParams.set("response_type", "code")
  url.searchParams.set("platform_id", "mp") // Este param se suele incluir
  url.searchParams.set("redirect_uri", redirectUri)
  // url.searchParams.set('state', 'opcional_para_control_interno');

  // Redirigimos al usuario a Mercado Pago
  return NextResponse.redirect(url.toString())
}

import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET() {
  const clientId = process.env.CLIENT_MP_ID // Tu client_id de Mercado Pago
  const clientSecret = process.env.CLIENT_MP_SECRET // Tu client_secret de Mercado Pago

  const supabase = createClient()

  const { data: oauthData, error } = await (await supabase)
    .from("oauth-tokens")
    .select("refresh_token")

  if (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Error al obtener el token de Mercado Pago", details: error },
      { status: 500 }
    )
  }

  const refreshToken = oauthData[0].refresh_token

  if (!clientId || !clientSecret || !refreshToken) {
    return NextResponse.json(
      { error: "Faltan variables de entorno" },
      { status: 500 }
    )
  }

  const response = await fetch("https://api.mercadopago.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
    }),
  })

  if (!response.ok) {
    const error = await response.json()
    console.error("Error al refrescar el token:", error)
    return NextResponse.json(
      { error: "Error al refrescar el token", details: error },
      { status: 400 }
    )
  }

  const data = await response.json()

  await (await supabase).from("oauth-tokens").update({
    access_token: data.access_token,
  })

  return NextResponse.json({
    message: "Token refrescado correctamente",
    data,
  })
}

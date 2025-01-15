// app/api/create-preference/route.ts
import { createClient } from "@/lib/supabase/server"
import { NextRequest, NextResponse } from "next/server"
import { MercadoPagoConfig, Preference } from "mercadopago"

// Endpoint principal
export async function POST(request: NextRequest) {
  try {
    // Leer el body de la request
    const body = await request.json()
    const supabase = createClient()

    // Validar los campos requeridos
    if (!body.id || !body.title || !body.quantity || !body.price) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios en la solicitud" },
        { status: 400 }
      )
    }

    // Construir la preferencia
    const preferenceBody = {
      items: [
        {
          id: body.id,
          title: body.title,
          quantity: Number(body.quantity),
          unit_price: Number(body.price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: `https://lmlegales.com.ar/orders/success?price=${body.price}`,
        failure: `https://lmlegales.com.ar/orders/failure?price=${body.price}`,
        pending: `https://lmlegales.com.ar/orders/pending`,
      },
      auto_return: "approved",
    }

    const { data: oauthData, error } = await (await supabase)
      .from("oauth-tokens")
      .select("access_token")

    if (error) {
      console.error(error)
      return NextResponse.json(
        { error: "Error al obtener el token de Mercado Pago", details: error },
        { status: 500 }
      )
    }

    const access_token = oauthData[0].access_token

    const client = new MercadoPagoConfig({
      accessToken: access_token,
    })

    const preference = new Preference(client)
    const result = await preference.create({ body: preferenceBody })

    if (!result.id) {
      return NextResponse.json(
        { error: "Error al crear la preferencia" },
        { status: 500 }
      )
    }

    // Respuesta exitosa
    return NextResponse.json({
      message: "Preferencia creada correctamente",
      preference: result.id,
    })
  } catch (error) {
    console.error("Error interno al crear la preferencia:", error)
    return NextResponse.json(
      // @ts-ignore
      { error: "Error interno del servidor", details: error.message },
      { status: 500 }
    )
  }
}

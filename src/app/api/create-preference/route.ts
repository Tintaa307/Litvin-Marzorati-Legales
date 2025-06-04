// app/api/create-preference/route.ts
import { NextRequest, NextResponse } from "next/server"
import { MercadoPagoConfig, Preference } from "mercadopago"

const my_access_token = process.env.ACCESS_TOKEN_MP as string

const client = new MercadoPagoConfig({
  accessToken: my_access_token,
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

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
    const preference = new Preference(client)
    const result = await preference.create({ body: preferenceBody })

    if (!result.id) {
      return NextResponse.json(
        { error: "Error al crear la preferencia" },
        { status: 500 }
      )
    }

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

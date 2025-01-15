// app/api/create-preference/route.ts
import { NextRequest, NextResponse } from "next/server"
import paymentData from "../../../../payment.json"
import { MercadoPagoConfig, Preference } from "mercadopago"

// Diccionario global DEMO
const USER_ACCESS_TOKENS = paymentData.account.access_token
const USER_ID = paymentData.account.user_id

const client = new MercadoPagoConfig({
  accessToken: USER_ACCESS_TOKENS,
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const userId = "347512470" //body.userId

    if (!userId) {
      return NextResponse.json(
        { error: "No se recibió userId" },
        { status: 400 }
      )
    }

    const userAccessToken = USER_ACCESS_TOKENS
    if (!userAccessToken) {
      return NextResponse.json(
        { error: `No tenemos un access_token para el usuario ${USER_ID}` },
        { status: 400 }
      )
    }

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
        success: `http://localhost:3000/orders/success?price=${body.price}`,
        failure: `http://localhost:3000/orders/failure?price=${body.price}`,
        pending: "http://localhost:3000/orders/pending",
      },
      auto_return: "approved",
    }

    const preference = new Preference(client)
    const result = await preference.create({ body: preferenceBody })

    if (!result) {
      return NextResponse.json(
        { error: "Error al crear preferencia" },
        { status: 400 }
      )
    }

    return NextResponse.json({
      message: "Preferencia creada correctamente",
      preference: result.id,
    })
  } catch (error) {
    console.error("Error al crear la preferencia:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}

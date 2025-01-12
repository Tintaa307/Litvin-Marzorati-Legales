// app/api/create-preference/route.ts
import { NextRequest, NextResponse } from "next/server"

// Diccionario global DEMO
const USER_ACCESS_TOKENS: Record<string, string> = {}

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

    const userAccessToken = USER_ACCESS_TOKENS[userId]
    if (!userAccessToken) {
      return NextResponse.json(
        { error: `No tenemos un access_token para el usuario ${userId}` },
        { status: 400 }
      )
    }

    const preferenceData = {
      items: [
        {
          title: "Mi Producto",
          quantity: 1,
          currency_id: "ARS",
          unit_price: 1,
        },
      ],
      back_urls: {
        success: "https://mi-sitio.com/success",
        failure: "https://mi-sitio.com/failure",
        pending: "https://mi-sitio.com/pending",
      },
    }

    const mpResponse = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preferenceData),
      }
    )

    if (!mpResponse.ok) {
      const errorData = await mpResponse.json()
      return NextResponse.json(
        { error: "Error al crear preferencia", details: errorData },
        { status: 400 }
      )
    }

    const createdPreference = await mpResponse.json()
    return NextResponse.json({
      message: "Preferencia creada correctamente",
      preference: createdPreference,
    })
  } catch (error) {
    console.error("Error al crear la preferencia:", error)
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}

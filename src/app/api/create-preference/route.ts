// app/api/create-preference/route.ts
import { NextRequest, NextResponse } from "next/server"

// Reutilizamos el diccionario del ejemplo anterior (ojo con la importación)
const USER_ACCESS_TOKENS: Record<string, string> = {} // <--- Mismo warning de DEMO

export async function POST(request: NextRequest) {
  try {
    // En la vida real, obtén el userId del contexto (ej: session) o
    // recíbelo en el body: e.g. { "userId": "..." }
    const body = await request.json()
    const userId = body.userId

    // Validamos si tenemos el access_token de ese user
    const userAccessToken = USER_ACCESS_TOKENS[userId]
    if (!userAccessToken) {
      return NextResponse.json(
        { error: `No tenemos un access_token para el usuario ${userId}` },
        { status: 400 }
      )
    }

    // Construimos la preferencia
    const preferenceData = {
      items: [
        {
          title: "Mi Producto",
          quantity: 1,
          currency_id: "ARS",
          unit_price: 100,
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
    // createdPreference contendrá la información de la preferencia, incluido el init_point, sandbox_init_point, etc.
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

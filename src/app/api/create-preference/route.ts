// app/api/create-preference/route.ts
import { NextRequest, NextResponse } from "next/server"

// Cargar tokens desde JSON o entorno (para múltiples usuarios, usar BD)
import paymentData from "../../../../payment.json"

// Endpoint principal
export async function POST(request: NextRequest) {
  try {
    // Leer el body de la request
    const body = await request.json()

    // Validar los campos requeridos
    if (!body.id || !body.title || !body.quantity || !body.price) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios en la solicitud" },
        { status: 400 }
      )
    }

    // Cargar el access_token desde payment.json (mejor usar DB en producción)
    const userAccessToken = paymentData.account.access_token
    if (!userAccessToken) {
      return NextResponse.json(
        { error: "Access token no encontrado o inválido" },
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

    // Llamar al endpoint de Mercado Pago para crear la preferencia
    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preferenceBody),
      }
    )

    const result = await response.json()

    if (!response.ok) {
      console.error("Error al crear preferencia:", result)
      return NextResponse.json(
        { error: "Error al crear la preferencia", details: result },
        { status: 400 }
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

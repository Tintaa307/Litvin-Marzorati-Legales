import { createClient } from "@/lib/supabase/server"
import { NextRequest, NextResponse } from "next/server"
import mercadopago from "mercadopago"

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

    // Obtener el access_token desde la base de datos
    const { data: oauthData, error } = await (await supabase)
      .from("oauth-tokens")
      .select("access_token")

    if (
      error ||
      !oauthData ||
      oauthData.length === 0 ||
      !oauthData[0].access_token
    ) {
      console.error("Error al obtener el token de Mercado Pago:", error)
      return NextResponse.json(
        { error: "No se encontró un access_token válido" },
        { status: 500 }
      )
    }

    const access_token = oauthData[0].access_token

    // Configurar el SDK de Mercado Pago
    // @ts-ignore
    mercadopago.configure({
      access_token: access_token,
    })

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

    // Crear la preferencia
    // @ts-ignore
    const result = await mercadopago.preferences.create(preferenceBody)

    if (!result || !result.body || !result.body.id) {
      console.error("Error al crear la preferencia:", result)
      return NextResponse.json(
        { error: "Error al crear la preferencia", details: result },
        { status: 500 }
      )
    }

    // Respuesta exitosa
    return NextResponse.json({
      message: "Preferencia creada correctamente",
      preference: result.body.id,
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

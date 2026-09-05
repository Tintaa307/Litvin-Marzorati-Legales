import { NextRequest, NextResponse } from "next/server"
import { MercadoPagoConfig, Payment } from "mercadopago"

const client = new MercadoPagoConfig({
  accessToken: process.env.ACCESS_TOKEN_MP as string,
})

// MercadoPago notifies payment updates here (configured as `notification_url`
// on the preference). We fetch the payment server-side instead of trusting
// the webhook body, since MP only guarantees the payment id is valid.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const paymentId = body?.data?.id

    if (body?.type !== "payment" || !paymentId) {
      return NextResponse.json({ received: true })
    }

    const payment = await new Payment(client).get({ id: paymentId })

    console.log(
      `MercadoPago payment ${paymentId} status: ${payment.status} (external_reference: ${payment.external_reference})`
    )

    // TODO: persist payment.status keyed by payment.external_reference
    // once the app has a datastore for brand-register submissions.

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Error procesando webhook de MercadoPago:", error)
    return NextResponse.json({ received: true })
  }
}

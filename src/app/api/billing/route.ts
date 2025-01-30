import { Resend } from "resend"
import { NextResponse } from "next/server"
import { BillingEmail } from "@/types"
import { BillingTemplate } from "@/components/billing-email-template"

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed", status: 405 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY as string)

    const data = await req.json()

    if (!data) {
      return NextResponse.json({
        message: "No data provided",
        status: 400,
      })
    }

    const {
      name,
      email,
      client,
      enterprisePhone,
      phone,
      registration,
      address,
      enterpriseName,
      instutionalEmail,
      locality,
      postalCode,
      rent,
      webiste,
    } = data as BillingEmail

    if (!phone || !email || !enterprisePhone || !registration) {
      return NextResponse.json({
        message: "Por favor, complete todos los campos",
        status: 400,
      })
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "LMLegales <contacto@lmlegales.com.ar>",
      to: ["info@lmlegales.com.ar", "ip@lmlegales.com.ar"],
      subject: "Nuevo mensaje desde LMLegales Website",
      react: BillingTemplate({
        client,
        name,
        email,
        phone,
        enterprisePhone,
        registration,
        address,
        enterpriseName,
        instutionalEmail,
        locality,
        postalCode,
        rent,
        webiste,
      }),
      text: "",
    })

    if (error) {
      console.log(error)
      return NextResponse.json({
        message: "Error al enviar el email",
        status: 500,
      })
    }

    console.log(emailData)

    return NextResponse.json({
      message: "El mensaje ha sido enviado correctamente.",
      status: 200,
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: "Error al enviar el email, por favor intente nuevamente",
      status: 500,
    })
  }
}

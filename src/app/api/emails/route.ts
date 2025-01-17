import { Resend } from "resend"
import { NextResponse } from "next/server"
import { EmailTemplate } from "@/components/new-email-template"
import { BodyEmail } from "@/types"

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

    const { name, email, message, subject } = data as BodyEmail

    if (!name || !email || !message || !subject) {
      return NextResponse.json({
        message: "Por favor, complete todos los campos",
        status: 400,
      })
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "LMLegales <contacto@lmlegales.com.ar>",
      to: ["valentinta@icloud.com"], //["info@lmlegales.com.ar", "ip@lmlegales.com.ar"],
      subject: "Nuevo mensaje desde LMLegales Website",
      react: EmailTemplate({
        name,
        email,
        message,
        subject,
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

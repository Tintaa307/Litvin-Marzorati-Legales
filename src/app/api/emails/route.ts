import { Resend } from "resend"
import { NextResponse } from "next/server"
import { EmailTemplate } from "@/components/new-email-template"
import { EmailTemplateOld } from "@/components/email-template"

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json({ message: "Method not allowed", status: 405 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const data = await req.json()

    if (!data) {
      return NextResponse.json({
        message: "No data provided",
        status: 400,
      })
    }

    const { name, email, message, subject } = data

    if (!name || !email || !message || !subject) {
      return NextResponse.json({
        message: "Por favor, complete todos los campos",
        status: 400,
      })
    }

    const { data: emailData, error } = await resend.emails.send({
      from: "LMLegales <contacto@lmlegales.com.ar>",
      to: ["info@lmlegales.com.ar", "ip@lmlegales.com.ar"],
      subject: "Nuevo mensaje desde LMLegales Website",
      react: EmailTemplateOld({
        name: name,
        message: message,
        email: email,
        subject: subject,
      }),
      text: "",
    })

    if (error) {
      console.error(error)
      return NextResponse.json({
        message: "Error al enviar el mensaje.",
        status: 500,
      })
    } else {
      console.log(emailData)
    }

    return NextResponse.json({
      message: "El mensaje ha sido enviado correctamente.",
      status: 200,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      message: "Error al enviar el mensaje.",
      status: 500,
    })
  }
}

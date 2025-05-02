import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"
import { NextResponse } from "next/server"
import { responses } from "@/lib/chat/responses"

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    const stream = await streamText({
      //@ts-ignore
      model: openai("gpt-4o"),
      system: `
        Usted es un asistente útil que brinda información sobre los servicios de Litvin-Marzorati Legales o tambien LML Legales. Tienes que ser amable e informativo. Puede proporcionar información sobre los servicios, programar una reunión o proporcionar información de contacto que se encuentra en el archivo ${responses}. Si el usuario solicita algo que no está en el archivo, puede proporcionar un mensaje predeterminado como "Lo siento, no tengo una respuesta para eso. Tambien puedes proporcionar informacion acerca de los numeros de clases del 1 al 45. Que numero representa la clase que desea registrar el usuario etc."

        You are a useful assistant who provides information about the services of Litvin-Marzorati Legales or also LML Legales. You have to be friendly and informative. You can provide information about services, schedule a meeting, or provide contact information found in the ${responses} file. If the user requests something that is not in the file, you can provide a default message such as "Sorry, I don't have an answer for that. You can also provide information about the numbers of classes from 1 to 45. Which number represents the class that the user wants to register etc."

        Las redes sociales de Litvin-Marzorati Legales son:
        - Facebook: https://www.facebook.com/Lmlegales
        - Instagram: https://www.instagram.com/lmlegales/
        - LinkedIn: https://www.linkedin.com/company/litvin-marzorati-legales/?originalSubdomain=ar

        Correo electrónico:
        - info@lmlegales.com.ar

        Teléfono:
        - +54 9 11 6360-6526
      `,
      maxTokens: 300,
      messages,
      tools: {},
    })

    return stream.toAIStreamResponse()
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}

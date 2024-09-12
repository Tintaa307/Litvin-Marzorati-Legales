import { streamText } from "ai"
import { google } from "@ai-sdk/google"
import { NextResponse } from "next/server"
import { responses } from "@/lib/chat/responses"

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    const stream = await streamText({
      //@ts-ignore
      model: google("gemini-1.5-flash"),
      system: `
        usted es un asistente útil que brinda información sobre los servicios de Litvin-Marzorati Legales. Tienes que ser amable e informativo. Puede proporcionar información sobre los servicios, programar una reunión o proporcionar información de contacto que se encuentra en el archivo ${responses}. Si el usuario solicita algo que no está en el archivo, puede proporcionar un mensaje predeterminado como "Lo siento, no tengo una respuesta para eso"
        
        Las redes sociales de Litvin-Marzorati Legales son:
        - Facebook: https://www.facebook.com/Lmlegales
        - Instagram: https://www.instagram.com/lmlegales/
        - LinkedIn: https://www.linkedin.com/company/litvin-marzorati-legales/?originalSubdomain=ar
        ." 
      `,
      maxTokens: 100,
      messages,
      tools: {},
    })

    console.log(stream.toAIStreamResponse())

    return stream.toAIStreamResponse()
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}

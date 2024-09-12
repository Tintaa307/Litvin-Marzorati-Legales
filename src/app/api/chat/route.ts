import { streamText } from "ai"
import { google } from "@ai-sdk/google"
import { NextResponse } from "next/server"
import { responses } from "@/lib/chat/responses"

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    // Filtrar el mensaje entrante para encontrar una respuesta correspondiente
    const userMessage = messages[messages.length - 1].content // Último mensaje del usuario
    const matchedResponse = responses.list.find((response) =>
      userMessage.toLowerCase().includes(response.data.toLowerCase())
    )

    // Si encontramos una respuesta que coincida, la usamos. Si no, usamos un mensaje predeterminado.
    const botResponse = matchedResponse
      ? matchedResponse.data
      : "Lo siento, no tengo una respuesta para eso."

    const stream = await streamText({
      //@ts-ignore
      model: google("gemini-1.5-flash"),
      system: `
        usted es un asistente útil que brinda información sobre los servicios de Litvin-Marzorati Legales. Tienes que ser amable e informativo. Puede proporcionar información sobre los servicios, programar una reunión o proporcionar información de contacto que se encuentra en el archivo ${responses}. Si el usuario solicita algo que no está en el archivo, puede proporcionar un mensaje predeterminado como "Lo siento, no tengo una respuesta para eso"." 
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

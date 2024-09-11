import { streamText } from "ai"
import { google } from "@ai-sdk/google"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    const stream = await streamText({
      //@ts-ignore
      model: google("gemini-1.5-flash"),
      system: "You are a helpful assistant.",

      maxTokens: 100,
      messages,
    })

    console.log(stream.toAIStreamResponse())

    return stream.toAIStreamResponse()
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}

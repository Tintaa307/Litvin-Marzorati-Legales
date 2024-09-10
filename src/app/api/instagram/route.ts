import { NextResponse } from "next/server"

const INSTAGRAM_TOKEN = process.env.INSTAGRAM_TOKEN

export async function POST(req: Request) {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${INSTAGRAM_TOKEN}&limit=6`
    )

    const data = await response.json()

    if (data.error) {
      return NextResponse.json({ error: data.error.message, status: 500 })
    }

    return NextResponse.json({ error: data.error.message, status: 200 })
  } catch (error) {
    NextResponse.json({ error: "Internal Server Error", status: 500 })
  }
}

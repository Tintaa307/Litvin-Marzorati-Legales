import { NextResponse } from "next/server"

const INSTAGRAM_TOKEN = process.env.INSTAGRAM_TOKEN

export async function GET() {
  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&access_token=${INSTAGRAM_TOKEN}&limit=6`
    )

    const data = await response.json()

    console.log(data)

    if (data.error) {
      console.log(data.error)
      return NextResponse.json({ error: data.error, status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Internal Server Error", status: 500 })
  }
}

"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

type InstagramPost = {
  id: string
  caption: string
  media_type: string
  media_url: string
  permalink: string
  timestamp: string
}

export default function InstagramFeed() {
  const [feed, setFeed] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    feed.map((post) => console.log(post.media_url))
  }, [feed])

  const fetchInstagramFeed = async () => {
    const response = await axios.get("/api/instagram")

    if (response.status !== 200) {
      console.log(response)
    }

    return response
  }

  useEffect(() => {
    fetchInstagramFeed()
      .then((res) => {
        if (res.status === 200) {
          setFeed(res.data.data)
          setLoading(false)
        } else {
          console.error("Error en la respuesta:", res)
        }
      })
      .catch((err) => console.error("Error:", err))
  }, [])

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
      <h2 className={`sm:text-[42px] text-[2rem] font-dmSerif font-normal`}>
        Conéctate con Nosotros
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Descubre nuestras últimas publicaciones, logros y eventos. Mantente
        informado.
      </p>
      <div className="grid grid-cols-3 place-items-center gap-y-8 gap-x-24">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="size-64 bg-gray-300" />
            ))
          : feed &&
            feed.map((post, index) => (
              <div key={index} className="size-64 rounded-md">
                {post.media_type === "IMAGE" ? (
                  <Image
                    src={post.media_url}
                    alt={"imagen de instagram"}
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-md aspect-[256px]"
                  />
                ) : (
                  <video
                    src={post.media_url}
                    muted
                    autoPlay
                    className="relative size-64 rounded-md object-fill"
                  />
                )}
              </div>
            ))}
      </div>
      <Link href={"https://www.instagram.com/lmlegales/"}>
        <button className="bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162% text-black text-sm w-max px-6 py-4 mt-7 font-medium rounded-md">
          Ver más publicaciones
        </button>
      </Link>
    </section>
  )
}

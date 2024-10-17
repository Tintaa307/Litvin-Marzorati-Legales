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

interface InstagramFeedProps {
  title: string
  subtitle: string
  cta: string
}

export default function InstagramFeed({
  cta,
  subtitle,
  title,
}: InstagramFeedProps) {
  const [feed, setFeed] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    feed.map((post) => console.log(post.media_url))
  }, [feed])

  const fetchInstagramFeed = async () => {
    const response = await axios.get("/api/instagram")

    if (response.status !== 200) {
      console.log("error: ", response)
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
        {title}
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto min_feed:text-xs">
        {subtitle}
      </p>
      <div className="grid grid-cols-3 place-items-center gap-y-8 gap-x-24 feed:gap-x-12 feed:grid-cols-2 min_feed:grid-cols-1">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="size-64 bg-accent-orange" />
            ))
          : feed &&
            feed.map((post, index) => (
              <Link href={post.permalink} key={index} target="_blank">
                <div className="size-64 rounded-md">
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
                      loop
                      className="relative size-64 rounded-md object-fill"
                    />
                  )}
                </div>
              </Link>
            ))}
      </div>
      <Link href={"https://www.instagram.com/lmlegales/"}>
        <button className="bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162% text-black text-sm w-max px-6 py-4 mt-7 font-medium rounded-md">
          {cta}
        </button>
      </Link>
    </section>
  )
}

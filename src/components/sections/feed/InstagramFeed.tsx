"use client"

import Link from "next/link"
import Image from "next/image"
import axios from "axios"
import { Skeleton } from "@/components/ui/skeleton"
import { useQuery } from "@tanstack/react-query"
import { useTranslations } from "next-intl"
import { useEffect } from "react"

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

export default function InstagramFeed() {
  const tInstagram = useTranslations("InstagramFeed")

  const {
    data: feed,
    isLoading,
    isError,
    error,
  } = useQuery<InstagramPost[]>({
    queryKey: ["instagramFeed"],
    queryFn: async () => {
      const response = await axios.get("/api/instagram")
      if (response.status !== 200) {
        throw new Error("Error fetching Instagram feed")
      }

      return response.data.data
    },
    staleTime: 1000 * 60 * 5, // 5 minutos de caché, ajusta según necesidad
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    console.log(feed)
    console.log(error)
  }, [feed, error])

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
      <h2 className="sm:text-[42px] text-[2rem] font-dmSerif font-normal">
        {tInstagram("title")}
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto min_feed:text-xs">
        {tInstagram("subtitle")}
      </p>
      <div className="grid grid-cols-3 place-items-center gap-y-8 gap-x-24 feed:gap-x-12 feed:grid-cols-2 min_feed:grid-cols-1">
        {isLoading &&
          Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="size-64 bg-accent-orange" />
          ))}
        {isError && (
          <div className="text-red-500">
            Ocurrió un error: {(error as Error).message}
          </div>
        )}
        {feed &&
          feed.map((post, index) => (
            <Link href={post.permalink} key={post.id} target="_blank">
              <div className="size-64 rounded-md">
                {post.media_type === "IMAGE" ? (
                  <Image
                    src={post.media_url}
                    alt="imagen de instagram"
                    width={400}
                    height={400}
                    unoptimized
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
      <Link href="https://www.instagram.com/lmlegales/">
        <button className="bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162% text-black text-sm w-max px-6 py-4 mt-7 font-medium rounded-md">
          {tInstagram("cta")}
        </button>
      </Link>
    </section>
  )
}

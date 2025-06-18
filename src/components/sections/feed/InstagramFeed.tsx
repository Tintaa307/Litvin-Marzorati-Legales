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

export default function InstagramFeed() {
  const tInstagram = useTranslations("InstagramFeed")

  const feed = [
    {
      id: "1",
      caption: "Instagram post 1",
      image_url: "/instagram/image-ig-1.jpg",
    },
    {
      id: "2",
      caption: "Instagram post 2",
      image_url: "/instagram/image-ig-2.jpg",
    },
    {
      id: "3",
      caption: "Instagram post 3",
      image_url: "/instagram/image-ig-3.jpg",
    },
    {
      id: "6",
      caption: "Instagram post 6",
      image_url: "/instagram/image-ig-4.jpg",
    },
    {
      id: "4",
      caption: "Instagram post 4",
      image_url: "/instagram/image-ig-5.jpg",
    },
    {
      id: "5",
      caption: "Instagram post 5",
      image_url: "/instagram/image-ig-6.jpg",
    },
  ]

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
      <h2 className="sm:text-[42px] text-[2rem] font-dmSerif font-normal">
        {tInstagram("title")}
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto min_feed:text-xs">
        {tInstagram("subtitle")}
      </p>
      <div className="grid grid-cols-3 place-items-center gap-y-8 gap-x-24 feed:gap-x-12 feed:grid-cols-2 min_feed:grid-cols-1">
        {feed.map((post, index) => (
          <Link
            href={"https://www.instagram.com/lmlegales/"}
            key={index}
            target="_blank"
          >
            <div className="size-64 rounded-md">
              <Image
                src={post.image_url as string}
                alt={tInstagram("alt")}
                width={400}
                height={400}
                unoptimized
                className="w-full h-auto rounded-md aspect-[256px]"
              />
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

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
      media_url:
        "https://www.instagram.com/p/DJcghjPsgYp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      image_url:
        "https://instagram.faep8-1.fna.fbcdn.net/v/t39.30808-6/493541062_1229663965828342_6561253880527606617_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QHLS_SpM0sN0Z18sD4_gyyxYSzyWIkPJeko-BxNL-2f4gEq5ULN6W1xLq5XZXFBMNI&_nc_ohc=zUjd_p5NAV4Q7kNvwEZFmS2&_nc_gid=0bd9NQFqDu6ffXspZF5ECw&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzYyODkxODQ0MjgyOTE1MzgzMw%3D%3D.3-ccb7-5&oh=00_AfKQ9L5TlrEUZ-cQh0_jpHKMPh8N4TpGWS8qOsHco74WRw&oe=682C6BCA&_nc_sid=10d13b",
    },
    {
      id: "2",
      caption: "Instagram post 2",
      media_url:
        "https://www.instagram.com/p/DJMTrkPs5ZG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      image_url:
        "https://instagram.faep8-2.fna.fbcdn.net/v/t39.30808-6/494306572_1229661879161884_1648756045682362654_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QGDKVN6CZEt7KSrwKuiQ_-VvouiGTE0DNzKhPM6niMB8wrjbsniL_3PM7HGdWjsghM&_nc_ohc=SgKAWvT7H3EQ7kNvwG8fc4t&_nc_gid=zia1BzBBjxtMp5RfxfSKfw&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzYyNDM1ODM1Njg2NTc1MDU5OA%3D%3D.3-ccb7-5&oh=00_AfK67jVTZjn2AUwTQ28ASxPY4S5kxPUMYPsIFgzFd20UUw&oe=682C7649&_nc_sid=10d13b",
    },
    {
      id: "3",
      caption: "Instagram post 3",
      media_url:
        "https://www.instagram.com/p/DIzTzXaPG6O/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      image_url:
        "https://instagram.faep8-1.fna.fbcdn.net/v/t39.30808-6/493289387_1225578202903585_1743049927838918460_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2QH9bHvE3DAbiHxKO5qcP_UoKCWgnAtlIs0RGx2B4Dl4gOk2VJnYaS5ysegu-Xp-h_Y&_nc_ohc=PNIDXAmgklcQ7kNvwElYSh7&_nc_gid=8a-jdXMzRd5SWHpG7E6uiw&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzYxNzMyMjAxODQyMTg5NDc5OA%3D%3D.3-ccb7-5&oh=00_AfK0hbZz1UTXDOU-ilDwAUVKF0IGRXnJir6urxquPE__1Q&oe=682C4A2F&_nc_sid=10d13b",
    },
    {
      id: "6",
      caption: "Instagram post 6",
      media_url:
        "https://www.instagram.com/p/DI6SG-XyYmX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      image_url:
        "https://instagram.faep8-1.fna.fbcdn.net/v/t39.30808-6/493316704_1225576326237106_3723889115969830968_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QE9IBFBGelD8VwXrGysSWLvZx6sXcay8UGl7Lt1SbfhIE39-Xnl4odVapjXcPL_eP0&_nc_ohc=0fGL7eDG4skQ7kNvwFuKeH-&_nc_gid=WI_4AZ6vqodvZjJTd-z_6w&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzYxOTI4NDg5NDY3MDc1MjE1MQ%3D%3D.3-ccb7-5&oh=00_AfLS1hAlzWmrR65CfK_sY5oGwGqGEP4XUq9shEun9ZKqUA&oe=682C4F60&_nc_sid=10d13b",
    },
    {
      id: "4",
      caption: "Instagram post 4",
      media_url:
        "https://www.instagram.com/p/DIENeMxNbAe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      image_url:
        "https://instagram.faep8-2.fna.fbcdn.net/v/t39.30808-6/492423746_1228077449320327_7448785666703323067_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QGQI13HSuDB8LvpfHn_Ae9HnfTNpG5YY4b2hGYw6AoiSxOXMlEe9KsLj8-MKxe1okM&_nc_ohc=lmjj5LsRJu4Q7kNvwGC5rc-&_nc_gid=ark_aUWjxgKfp9HscTluLw&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzYwNDA2NDg1MTcwMjY4OTgyMg%3D%3D.3-ccb7-5&oh=00_AfIx3_pkmgBYvSAWXeh8qwGd7QLx13BqmJQSRNvbFuq2oQ&oe=682C6316&_nc_sid=10d13b",
    },
    {
      id: "5",
      caption: "Instagram post 5",
      media_url:
        "https://www.instagram.com/p/DJjfDPjuvLD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      image_url:
        "https://instagram.faep8-1.fna.fbcdn.net/v/t39.30808-6/494497443_1229665152494890_3658844547477324446_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODB4MTA4MC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=110&_nc_oc=Q6cZ2QECpqDwYW0ETOhzqVuDX3mH9nTIgQcdXMfqfOUGbzopyLJz-04c-csTCZbAB3SRxtY&_nc_ohc=9RZPQnFLYikQ7kNvwEAcupL&_nc_gid=Q3jwvOa7_pOeOm-iDrEOSA&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzYzMDg4MjI4Njg5NjYwNzkzOQ%3D%3D.3-ccb7-5&oh=00_AfKH0M6OC4Xw5ODqm9W7xSnRKagEgd5A5miEKYg3CLgxgw&oe=682C536F&_nc_sid=10d13b",
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
          <Link href={post.media_url} key={index} target="_blank">
            <div className="size-64 rounded-md">
              <Image
                src={post.image_url as string}
                alt="imagen de instagram"
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

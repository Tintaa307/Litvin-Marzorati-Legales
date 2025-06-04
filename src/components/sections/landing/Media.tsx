"use client"
import { A11y, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperType from "swiper"

import MediaCard from "@/components/cards/MediaCard"
import ArrowButton from "@/components/inputs/ArrowButton"
import Heading from "@/components/text/Heading"
import { useRef } from "react"

import mediaData from "@/utils/media-data"
import useClicks from "@/hooks/useSliderClick"

interface Props {
  header: Header
}

const Media = ({ header }: Props) => {
  const swiperLen = mediaData.length
  const { clicks, handleClick } = useClicks(0, swiperLen)
  const swiperRef = useRef<SwiperType | undefined>(undefined)

  return (
    <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between lg:items-start items-center main-padding pt-24 sm:mb-24 mb-20 bg-cover bg-center bg-[url('/assets/mediaBg.png')]">
      <div className="flex flex-col gap-10 max-w-[24rem]">
        <Heading
          title={header.title}
          subtitle={header.subtitle}
          notCentered={true}
        />
        <div className="gap-[0.85rem] lg:flex hidden">
          <ArrowButton
            left={true}
            clicks={clicks}
            maxClicks={swiperLen - 1}
            handleClick={handleClick}
            swiperRef={swiperRef}
          />
          <ArrowButton
            clicks={clicks}
            maxClicks={swiperLen - 1}
            handleClick={handleClick}
            swiperRef={swiperRef}
          />
        </div>
      </div>
      <div className="lg:w-[36rem] w-[24rem]">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1.2}
          centeredSlides={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {mediaData.map((object, index) => (
            <SwiperSlide
              key={index}
              className="sm:pl-0 pl-[10%] overflow-hidden"
            >
              <MediaCard image={object.src}></MediaCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="gap-[0.85rem] lg:hidden flex">
        <ArrowButton
          left={true}
          clicks={clicks}
          maxClicks={swiperLen - 1}
          handleClick={handleClick}
          swiperRef={swiperRef}
        />
        <ArrowButton
          clicks={clicks}
          maxClicks={swiperLen - 1}
          handleClick={handleClick}
          swiperRef={swiperRef}
        />
      </div>
    </div>
  )
}

export default Media

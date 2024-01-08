'use client';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperType from 'swiper';

import MediaCard from "@/components/cards/MediaCard";
import ArrowButton from "@/components/inputs/ArrowButton";
import Heading from "@/components/text/Heading";
import { useRef } from 'react';

import mediaData from '@/utils/media-data';
import useClicks from '@/hooks/useSliderClick';

const Media = () => {
    const swiperLen = mediaData.length;
    const {clicks, handleClick} = useClicks(0, swiperLen);
    const swiperRef = useRef<SwiperType>();

    return (
        <div className="flex justify-between main-padding mt-24 mb-36">
            <div className="flex flex-col gap-10 max-w-[32rem]">
                <Heading 
                    title="Trascendiendo en los medios" 
                    subtitle="Somos uno de los más reconocidos estudios de servicios de Propiedad Intelectual en América Latina." 
                    notCentered={true} />
                <div className="flex gap-[0.85rem]">
                    <ArrowButton left={true} clicks={clicks} maxClicks={swiperLen - 1} handleClick={handleClick} swiperRef={swiperRef}/>
                    <ArrowButton clicks={clicks} maxClicks={swiperLen - 1} handleClick={handleClick} swiperRef={swiperRef}/>
                </div>
            </div>
            <div className='w-[36rem]'>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={1.1}
                    centeredSlides={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    >
                    {mediaData.map((object, index) => (
                        <SwiperSlide key={index}>
                            <MediaCard image={object.src}></MediaCard>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Media;
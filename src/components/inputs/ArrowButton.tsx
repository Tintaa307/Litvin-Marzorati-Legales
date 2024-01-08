'use client';
import Image from "next/image";
import arrow from "../../../public/icons/arrow-right.svg";
import React, { MutableRefObject } from 'react';
import SwiperType from 'swiper';

interface Props {
    left?: boolean,
    swiperRef: MutableRefObject<SwiperType | undefined>,
    handleClick: (dirrection: string) => void,
    clicks: number,
    maxClicks: number,
}

const ArrowButton = ({left, swiperRef, handleClick, clicks, maxClicks}: Props) => {
    const handleArrowClick = () => {
        if(swiperRef.current) {
            if(!left){
                swiperRef.current.slideNext();
                handleClick('next');
                return;
            }

            swiperRef.current.slidePrev();
            handleClick('prev');
        }
    }

    return (
       <button onClick={handleArrowClick} className={`w-[4rem] h-[4rem] flex items-center justify-center rounded-[100px] duration-100 ${!left && (clicks !== (maxClicks + 1) ? 'bg-accent-orange' : 'bg-transparent opacity-50')} ${left && (clicks !== 0 ? 'bg-accent-orange' : 'bg-transparent opacity-50')}`}>
            <Image src={arrow} alt="arrow" width={36} className={`${left && 'rotate-180'}`}></Image>
       </button>
    );
};

export default ArrowButton;
import Image from "next/image";
import arrow from "../../../public/icons/arrow-right.svg";

interface Props {
    icon: string,
    title: string,
    redirect: string,
    tBorder?: boolean,
    bBorder?: boolean,
    rBorder?: boolean,
    lBorder?: boolean,
}

const ServiceCard = ({title, icon, redirect, tBorder, bBorder, lBorder, rBorder}: Props) => {
    return (
        <div className={`w-[23.8rem] h-[17.6rem] p-7 bg-transparent flex flex-col gap-8 group hover:cursor-pointer border-black ${tBorder && 'border-t'} ${bBorder && 'border-b'} ${rBorder && 'border-r'} ${lBorder && 'border-l'}`}>
            <div className="flex flex-col gap-6 w-[19rem]">
                <Image src={icon} alt={title} className="duration-150 group-hover:rotate-12"></Image>
                <h2 className="text-[1.5rem]">{title}</h2>
            </div>
            <div className="flex items-center gap-1 group-hover:gap-3 duration-150">
                <h3 className="text-base">Aprendé más</h3>
                <Image src={arrow} alt="arrow icon"></Image>
            </div>
        </div>
    );
};

export default ServiceCard;

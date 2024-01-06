import Image from "next/image";
import arrow from "../../../public/icons/arrow-right.svg";

interface Props {
    left?: boolean
}

const ArrowButton = ({left}: Props) => {
    return (
       <button className="w-[4rem] h-[4rem] flex items-center justify-center bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162% rounded-[100px]">
            <Image src={arrow} alt="arrow" width={36} className={`${left && 'rotate-180'}`}></Image>
       </button>
    );
};

export default ArrowButton;
import Image, { StaticImageData } from "next/image";
import linkedInIcon from '../../../public/icons/about/linkedin.svg';
import Link from "next/link";

interface Props {
    name: string,
    position: string,
    image: StaticImageData,
    linkedIn: string,
}

const TeamCard = ({name, position, image, linkedIn}: Props) => {
    return (
        <div className="w-[22.88rem] h-[22.97rem] text-white overflow-hidden relative group font-poppins cursor-pointer">
            <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-50 duration-300"></div>
            <Image src={image} alt={name}></Image>
            <div className="absolute top-60 right-0 w-full">
                <div className="relative right-3 group-hover:right-12 duration-300">
                    <h1 className="absolute whitespace-nowrap right-0 z-10 text-[1.35rem] font-medium">{name}
                        <div className="w-[80%] h-[1rem] bg-gradient-to-r -z-10 from-accent-orange to-accent-brown opacity-40 -right-3 top-5 absolute"></div>
                    </h1>
                </div>
                <Link href={linkedIn} target="_blank">
                    <Image src={linkedInIcon} alt="linkedin" className="absolute -right-8 group-hover:right-2 duration-300 top-2"></Image>
                </Link>
            </div>
            <div className="absolute top-72 right-0 w-[65%]">
                <div className="relative -right-64 group-hover:right-3 duration-500 text-right">
                    <h2 className="absolute whitespace-normal right-0 z-10 text-base">{position}
                        <div className="w-[80%] h-[90%] bg-gradient-to-r -z-10 from-accent-orange to-accent-brown opacity-40 -right-3 top-3 absolute"></div>
                    </h2> 
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
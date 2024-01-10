import Image from "next/image";

interface Props {
    title: string,
    text: string,
    image: string
}

const AboutCard = ({title, text, image}: Props) => {
    return (
        <div className="w-[22rem] h-[14rem] bg-[#F4E6DE] rounded-2xl group relative overflow-hidden">
            <div className="absolute w-full h-full duration-300 bg-gradient-to-br from-accent-orange to-accent-brown opacity-0 group-hover:opacity-100"></div>
            <div className="absolute w-full h-full flex justify-center items-center text-center p-4 duration-[400ms] -bottom-48 group-hover:-bottom-2">
                <h2 className="text-white">{text}</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 h-full opacity-100 duration-300 group-hover:opacity-0">
                <Image src={image} alt={title + ' card icon'}></Image>
                <h2 className="text-[1.4rem]">{title}</h2>
            </div>
        </div>
    );
};

export default AboutCard;
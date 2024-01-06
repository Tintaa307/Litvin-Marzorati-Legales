import Image, { StaticImageData } from "next/image";

interface Props {
    src: StaticImageData,
}

const AwardLogo = ({src}: Props) => {
    return (
        <div className="w-40 h-24 mx-8 flex items-center justify-center">
            <Image src={src} alt="award"></Image>
        </div>
    );
};

export default AwardLogo;
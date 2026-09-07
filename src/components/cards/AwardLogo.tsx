import Image, { StaticImageData } from "next/image";

interface Props {
    src: StaticImageData,
}

const AwardLogo = ({src}: Props) => {
    return (
        <div className="w-40 h-24 sm:mx-8 mx-4 flex items-center justify-center">
            <Image src={src} alt="award" className="grayscale opacity-60 hover:opacity-100 motion-safe:transition-opacity"></Image>
        </div>
    );
};

export default AwardLogo;
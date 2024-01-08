import Image, { StaticImageData } from "next/image";

interface Props {
    image: StaticImageData,
}

const MediaCard = ({image}: Props) => {
    return (
        <div className="lg:w-full w-80">
            <Image src={image} alt="media image"></Image>
        </div>
    );
};

export default MediaCard;
import Image, { StaticImageData } from "next/image";

interface Props {
    image: StaticImageData,
}

const MediaCard = ({image}: Props) => {
    return (
        <div className="">
            <Image src={image} alt="media image"></Image>
        </div>
    );
};

export default MediaCard;
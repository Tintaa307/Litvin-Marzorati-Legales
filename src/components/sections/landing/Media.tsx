import MediaCard from "@/components/cards/MediaCard";
import ArrowButton from "@/components/inputs/ArrowButton";
import Heading from "@/components/text/Heading";

import testimage from '../../../../public/media/media1.png';

const Media = () => {
    return (
        <div className="flex justify-between main-padding mt-24">
            <div className="flex flex-col gap-10 max-w-[32rem]">
                <Heading 
                    title="Trascendiendo en los medios" 
                    subtitle="Somos uno de los más reconocidos estudios de servicios de Propiedad Intelectual en América Latina." 
                    notCentered={true} />
                <div className="flex gap-[0.85rem]">
                    <ArrowButton left={true}/>
                    <ArrowButton/>
                </div>
            </div>
            <div>
                <MediaCard image={testimage}></MediaCard>
            </div>
        </div>
    );
};

export default Media;
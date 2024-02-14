import AboutCard from "@/components/cards/AboutCard";
import Heading from "@/components/text/Heading";
import { aboutCardsData, aboutCardsDataEng } from "@/utils/aboutCards-data";
import { useLocale, useTranslations } from "next-intl";

const AboutCards = () => {
    const t = useTranslations("AboutCards");
    return (
        <div className="mt-48 flex flex-col items-center justify-start main-padding cursor-default">
            <Heading title={t("title")} subtitle={t("subtitle")}></Heading>
            <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
                {useLocale() === 'es' ?
                aboutCardsData.map((obj, index) => (
                    <AboutCard 
                        key={index} 
                        title={obj.title} 
                        text={obj.text} 
                        image={obj.image}
                    />
                )) :
                aboutCardsDataEng.map((obj, index) => (
                    <AboutCard 
                        key={index} 
                        title={obj.title} 
                        text={obj.text} 
                        image={obj.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutCards;
import TeamCard from "@/components/cards/TeamCard";
import Heading from "@/components/text/Heading";
import { teamData, teamDataEng } from "@/utils/team-data";
import { useTranslations, useLocale } from "next-intl";

const Team = () => {
    const t = useTranslations("Team");
    return (
        <div className="sm:mt-48 mt-40 sm:mb-48 mb-40 flex flex-col gap-10 items-center justify-start main-padding">
            <Heading title={t("title")} subtitle={t("subtitle")}></Heading>
            <div className="flex flex-wrap justify-center items-center gap-5">
                {useLocale() === 'es' ?
                teamData.map((obj, index) => (
                    <TeamCard 
                        key={index}
                        name={obj.name}
                        position={obj.position}
                        image={obj.image}
                        linkedIn={obj.linkedIn}
                    />
                )) :
                teamDataEng.map((obj, index) => (
                    <TeamCard 
                        key={index}
                        name={obj.name}
                        position={obj.position}
                        image={obj.image}
                        linkedIn={obj.linkedIn}
                    />
                ))}
            </div>
        </div>
    );
};

export default Team;
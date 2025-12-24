import TeamCard from "@/components/cards/TeamCard"
import Heading from "@/components/text/Heading"
import { teamData } from "@/utils/team-data"
import { useTranslations } from "next-intl"
import { StaticImageData } from "next/image"

const Team = () => {
  const t = useTranslations("Team")
  return (
    <div className="my-16 flex flex-col gap-10 items-center justify-start">
      <Heading title={t("title")} subtitle={t("subtitle")}></Heading>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {teamData.map((obj, index) => (
          <TeamCard
            key={index}
            name={obj.name}
            position={t(`positions.${obj.positionKey}`)}
            image={obj.image as StaticImageData}
            linkedIn={obj.linkedIn}
          />
        ))}
      </div>
    </div>
  )
}

export default Team

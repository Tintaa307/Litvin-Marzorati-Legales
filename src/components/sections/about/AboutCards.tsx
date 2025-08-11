"use client"

import AboutCard from "@/components/cards/AboutCard"
import Heading from "@/components/text/Heading"
import { aboutCardsData, aboutCardsDataEng } from "@/utils/aboutCards-data"
import { useLocale, useTranslations } from "next-intl"

const AboutCards = () => {
  const t = useTranslations("AboutCards")
  return (
    <div className="mt-12 flex flex-col items-center justify-start main-padding cursor-default">
      <Heading title={t("title")} subtitle={t("subtitle")}></Heading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 w-full max-w-4xl">
        {useLocale() === "es"
          ? aboutCardsData.map((obj, index) => (
              <AboutCard
                key={index}
                title={obj.title}
                text={obj.text}
                image={obj.image}
                index={index}
              />
            ))
          : aboutCardsDataEng.map((obj, index) => (
              <AboutCard
                key={index}
                title={obj.title}
                text={obj.text}
                image={obj.image}
                index={index}
              />
            ))}
      </div>
    </div>
  )
}

export default AboutCards

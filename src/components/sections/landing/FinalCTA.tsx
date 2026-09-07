import CtaButton from "@/components/inputs/Button"
import Heading from "@/components/text/Heading"
import { useLocale, useTranslations } from "next-intl"

const FinalCTA = () => {
  const t = useTranslations("FinalCTA")
  const locale = useLocale()

  return (
    <div className="flex flex-col gap-8 items-center justify-center bg-surface-inverse text-fg-on-dark border-b border-border-hairline-on-dark main-padding h-96 py-16">
      <Heading title={t("title")}></Heading>
      <div className="w-full h-max flex justify-center items-center gap-3">
        <CtaButton
          className="bg-action-inverse-bg text-action-inverse-fg hover:bg-action-inverse-bg-hover active:bg-action-inverse-bg-active"
          url="/contacto"
          locale={locale}
          text={t("cta")}
        ></CtaButton>
      </div>
    </div>
  )
}

export default FinalCTA

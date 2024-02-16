import CtaButton from "@/components/inputs/Button";
import Heading from "@/components/text/Heading";
import { useLocale, useTranslations } from "next-intl";

const FinalCTA = () => {
    const t = useTranslations("FinalCTA");
    const locale = useLocale();

    return (
        <div className="flex flex-col gap-8 items-center justify-center bg-center bg-no-repeat bg-cover bg-[url('/assets/finalCTA.png')] main-padding h-96 py-16">
            <Heading title={t("title")}></Heading>
            <CtaButton locale={locale} text={t("cta")}></CtaButton>
        </div>
    );
};

export default FinalCTA;
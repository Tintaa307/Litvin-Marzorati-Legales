import WhatsappBtn from "@/components/inputs/WhatsappBtn";
import ContactForm from "./ContactForm";
import ColoredHeading from "@/components/text/ColoredHeading";
import { useTranslations } from "next-intl";

const ContactHero = () => {
    const t = useTranslations('Contact');
    const tToast = useTranslations("Toast");
    
    return (
        <div className="main-padding flex md:flex-row flex-col md:items-start items-start md:justify-between md:gap-0 gap-10 3xl:mt-72 mt-52 mb-24">
            <div className="flex flex-col gap-6 md:w-[50%] w-full md:items-start items-center">
                <ColoredHeading title={t('title')} notCentered={true} poppins={true}></ColoredHeading>
                <WhatsappBtn></WhatsappBtn>
            </div>
            <ContactForm name={t("name")} email={t("email")} subject={t("subject")} message={t("message")} btn={t("btn")} success={tToast("emailSuccess")} emailError={tToast("emailError")} formError={tToast("formError")}></ContactForm>
        </div>
    );
};

export default ContactHero;
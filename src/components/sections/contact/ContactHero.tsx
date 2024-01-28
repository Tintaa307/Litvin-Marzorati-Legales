import WhatsappBtn from "@/components/inputs/WhatsappBtn";
import ContactForm from "./ContactForm";
import ColoredHeading from "@/components/text/ColoredHeading";

const ContactHero = () => {
    return (
        <div className="main-padding flex md:flex-row flex-col md:items-start items-start md:justify-between md:gap-0 gap-10 3xl:mt-72 mt-52 mb-24">
            <div className="flex flex-col gap-6 md:w-[50%] w-full md:items-start items-center">
                <ColoredHeading title="Trabajamos para darle una respuesta pronto." notCentered={true} poppins={true}></ColoredHeading>
                <WhatsappBtn></WhatsappBtn>
            </div>
            <ContactForm></ContactForm>
        </div>
    );
};

export default ContactHero;
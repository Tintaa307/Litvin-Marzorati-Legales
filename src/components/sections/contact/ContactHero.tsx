import WhatsappBtn from "@/components/inputs/WhatsappBtn";
import Heading from "@/components/text/Heading";

const ContactHero = () => {
    return (
        <div className="main-padding flex justify-between mt-64 h-screen">
            <div className="flex flex-col gap-6">
                <Heading title="Trabajamos para darle una respuesta pronto." notCentered={true} poppins={true}></Heading>
                <WhatsappBtn></WhatsappBtn>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default ContactHero;
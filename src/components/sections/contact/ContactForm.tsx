import InputLabel from "./InputLabel";

const ContactForm = () => {
    return (
        <form action="submit" className="md:w-[45%] w-full grid gap-6 items-start h-fit">
            <div className="flex flex-col gap-2">
                <InputLabel pos="01" text="Nombre completo*"></InputLabel>
                <input name="name" type="text" className="bg-transparent outline-none border-b border-black/30"/>
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel pos="02" text="Correo electrónico*"></InputLabel>
                <input name="mail" type="text" className="bg-transparent outline-none border-b border-black/30"/>
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel pos="03" text="Asunto"></InputLabel>
                <input name="subject" type="text" className="bg-transparent outline-none border-b border-black/30"/>
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel pos="04" text="Mensaje*"></InputLabel>
                <input name="message" type="text" className="bg-transparent outline-none border-b border-black/30"/>
            </div>
            <div className="w-full flex justify-start">
                <button type="submit" className="bg-accent-orange py-3 px-8 rounded-md w-28">Enviar</button>
            </div>
       </form>
    );
};

export default ContactForm;
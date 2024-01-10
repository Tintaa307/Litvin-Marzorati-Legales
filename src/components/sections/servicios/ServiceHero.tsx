const ServiceHero = () => {
    return (
        <div className="h-screen bg-cover sm:bg-center bg-[url('/assets/metaversoBg.png')]">
            <div className="main-padding pt-56">
                <div className="flex gap-3 h-max">
                    <span className="w-[0.5rem] bg-gradient-to-b from-accent-orange to-accent-brown"></span>
                    <div className="text-white flex flex-col gap-3 max-w-[48rem]">
                        <h1 className="font-dmSerif font-normal 2xl:text-[3.75rem] sm:text-[2.75rem] text-[1.9rem] text-left">
                            Metaverso e Inteligencia Artificial
                        </h1>
                        <h2 className="font-poppins text-[1.25rem] font-medium">Somos un estudio líder y visionario en el ámbito de la propiedad intelectual e inteligencia artificial.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;
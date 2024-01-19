import Nav from "@/components/Nav";
import ServiceBody from "@/components/sections/servicios/ServiceBody";
import ServiceHero from "@/components/sections/servicios/ServiceHero";

import { internetData } from "@/utils/servicePages-data";

export default function Internet() {
    const heroData = {
        title: 'Internet',
        subtitle: 'Pioneros en brindar asistencia a nuestros clientes para navegar en el mundo legal de la tecnología y el Internet',
    }
    return (
        <>
            <div className="absolute -top-16 bg-no-repeat bg-center bg-[url('/assets/internetBg.png')] w-full h-[124vh] -z-50">
                <div className="w-full absolute bottom-0 h-12 bg-gradient-to-t from-background"></div>
            </div>
            <Nav white={true}></Nav>
            <div className="z-10">
                <ServiceHero title={heroData.title} subtitle={heroData.subtitle}></ServiceHero>
                <ServiceBody data={internetData}/>
            </div>
        </>
    );
};
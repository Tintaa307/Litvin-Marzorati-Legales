import Nav from "@/components/Nav";
import ServiceBody from "@/components/sections/servicios/ServiceBody";
import ServiceHero from "@/components/sections/servicios/ServiceHero";

import { propIntelecualData } from "@/utils/servicePages-data";

export default function PropIntelectual() {
    const heroData = {
        title: 'Propiedad Intelectual',
        subtitle: 'Nuestro asesoramiento legal se caracteriza por ser innovador, personalizado y eficiente',
    }
    return (
        <>
            <div className="absolute -top-16 bg-no-repeat bg-center bg-[url('/assets/propInelectualBg.png')] w-full h-[124vh] -z-50">
                <div className="w-full absolute bottom-0 h-12 bg-gradient-to-t from-background"></div>
            </div>
            <Nav white={true}></Nav>
            <div className="z-10">
                <ServiceHero title={heroData.title} subtitle={heroData.subtitle}></ServiceHero>
                <ServiceBody data={propIntelecualData}/>
            </div>
        </>
    );
};
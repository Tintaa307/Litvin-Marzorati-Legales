import Nav from "@/components/Nav";
import ServiceBody from "@/components/sections/servicios/ServiceBody";
import ServiceHero from "@/components/sections/servicios/ServiceHero";

import { emprendedoresData } from "@/utils/servicePages-data";

export default function Emprendedores() {
    const heroData = {
        title: 'Emprendedores y nuevos proyectos',
        subtitle: 'Nos enfocamos en negocios. Desde simples consultas diarias hasta grandes acuerdos y juicios internacionales',
    }
    return (
        <>
            <div className="absolute -top-16 bg-no-repeat bg-center bg-[url('/assets/emprendedoresBg.png')] w-full h-[124vh] -z-50">
                <div className="w-full absolute bottom-0 h-12 bg-gradient-to-t from-background"></div>
            </div>
            <Nav white={true}></Nav>
            <div className="z-10">
                <ServiceHero title={heroData.title} subtitle={heroData.subtitle}></ServiceHero>
                <ServiceBody data={emprendedoresData}/>
            </div>
        </>
    );
};
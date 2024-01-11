import Nav from "@/components/Nav";
import ServiceBody from "@/components/sections/servicios/ServiceBody";
import ServiceHero from "@/components/sections/servicios/ServiceHero";

import { metaverseData } from "@/utils/servicePages-data";

export default function Metaverso() {
    return (
        <>
            <div className="absolute -top-5 bg-no-repeat bg-center bg-[url('/assets/metaversoBg.png')] w-full h-[124vh] -z-50">
                <div className="w-full absolute bottom-0 h-12 bg-gradient-to-t from-background"></div>
            </div>
            <Nav white={true}></Nav>
            <div className="z-10">
                <ServiceHero></ServiceHero>
                <ServiceBody 
                    firstHighlight={metaverseData.firstHighlight} 
                    secondHighlight={metaverseData.secondHighlight}
                    p1={metaverseData.p1}
                    p2={metaverseData.p2}
                    p3={metaverseData.p3}
                    p4={metaverseData.p4}
                    p5={metaverseData.p5}>
                </ServiceBody>
            </div>
        </>
    );
};
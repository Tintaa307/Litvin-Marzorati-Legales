'use client';
import HeroFact from "@/components/cards/HeroFact";
import CtaButton from "@/components/inputs/Button";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className="bg-cover bg-center bg-[url('/assets/heroBg.png')] pb-10">
            <div className="main-padding xl:pt-64 pt-48">
                <div className="flex flex-col items-center justify-start gap-12">
                    <div className="font-meshedDisplay font-semibold 2xl:text-[4.375rem] text-[2.75rem] text-center px-3 max-w-[50rem]">
                        <h1 className="sm:whitespace-nowrap">
                            Asesorate con expertos, 
                        </h1>
                        <h1 className="sm:whitespace-nowrap">le damos valor a tus</h1>
                        <TypeAnimation
                            sequence={[
                                'ideas.',
                                2000,
                                'marcas.',
                                2000,
                                'dominios.',
                                2000,
                                'patentes.',
                                2000,
                                'modelos de utilidad.',
                                2000,
                                'software.',
                                2000,
                            ]}
                            wrapper="span"
                            speed={30}
                            deletionSpeed={40}
                            repeat={Infinity}
                        />
                    </div>
                    <CtaButton></CtaButton>
                </div>
                <div className="mt-40 flex flex-wrap justify-around">
                    <HeroFact num={21500} title="Expedientes"></HeroFact>
                    <HeroFact num={3700} title="Clientes"></HeroFact>
                    <HeroFact num={90} title="Corresponsales especializados"></HeroFact>
                </div>
            </div>
        </div>
    );
};

export default Hero;
'use client';
import HeroFact from "@/components/cards/HeroFact";
import CtaButton from "@/components/inputs/Button";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className="bg-cover sm:bg-center bg-[center_right_-38rem] bg-[url('/assets/heroBg.png')] pb-10">
            <div className="main-padding pt-64">
                <div className="flex flex-col items-center justify-start gap-12">
                    <div className="font-meshedDisplay font-bold 2xl:text-[3.75rem] sm:text-[2.75rem] text-[1.9rem] text-center px-0 max-w-[50rem]">
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
                <div className="3xl:mt-40 mt-24 flex flex-wrap justify-around">
                    <HeroFact num={21500} title="Expedientes"></HeroFact>
                    <HeroFact num={3700} title="Clientes"></HeroFact>
                    <HeroFact num={90} title="Corresponsales especializados"></HeroFact>
                </div>
            </div>
        </div>
    );
};

export default Hero;
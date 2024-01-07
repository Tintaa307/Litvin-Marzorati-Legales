'use client';
import HeroFact from "@/components/cards/HeroFact";
import CtaButton from "@/components/inputs/Button";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
    return (
        <div className="bg-cover bg-center bg-[url('/assets/heroBg.png')] pb-10">
            <div className="main-padding pt-64">
                <div className="flex flex-col items-center justify-start gap-12">
                    <div className="font-meshedDisplay font-semibold xl:text-[4.375rem] text-[3rem] text-center px-3 max-w-[50rem]">
                        <h1 className="">
                            Asesorate con expertos, le damos valor a tus 
                        </h1>
                        <TypeAnimation
                            sequence={[
                                'ideas.',
                                3000,
                                'marcas.',
                                3000,
                                'dominios.',
                                3000,
                                'patentes.',
                                3000,
                                'modelos de utilidad.',
                                3000,
                                'software.',
                                3000,
                            ]}
                            wrapper="span"
                            speed={30}
                            deletionSpeed={40}
                            repeat={Infinity}
                        />
                    </div>
                    <CtaButton></CtaButton>
                </div>
                <div className="mt-48 flex justify-around">
                    <HeroFact num={21500} title="Expedientes"></HeroFact>
                    <HeroFact num={3700} title="Clientes"></HeroFact>
                    <HeroFact num={90} title="Corresponsales especializados"></HeroFact>
                </div>
            </div>
        </div>
    );
};

export default Hero;
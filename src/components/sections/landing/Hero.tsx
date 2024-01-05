import HeroFact from "@/components/cards/HeroFact";
import CtaButton from "@/components/inputs/Button";

const Hero = () => {
    return (
        <div className="bg-cover bg-center bg-[url('/assets/heroBg.png')] pb-10">
            <div className="main-padding pt-64">
                <div className="flex flex-col items-center justify-start gap-12">
                    <h1 className="font-meshedDisplay font-semibold text-[4.375rem] text-center px-3 max-w-[60rem]">Le damos valor a tus ideas,<span> asesorate con expertos.</span></h1>
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
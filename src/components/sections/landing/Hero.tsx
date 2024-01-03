import HeroFact from "@/components/cards/HeroFact";
import CtaButton from "@/components/inputs/Button";

const Hero = () => {
    return (
        <div className="bg-cover bg-[url('/assets/heroBg.png')]">
            <div className="px-96 pt-72">
                <div className="flex flex-col items-center justify-start gap-12">
                    <h1 className="font-meshedDisplay font-semibold text-[4.375rem] text-center px-3">Le damos valor a tus ideas,<span> asesorate con expertos.</span></h1>
                    <CtaButton></CtaButton>
                </div>
                <div className="mt-60">
                    <HeroFact num={300} title="test"></HeroFact>
                    <h2>.</h2>
                </div>
            </div>
        </div>
    );
};

export default Hero;
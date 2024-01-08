import CtaButton from "@/components/inputs/Button";
import Heading from "@/components/text/Heading";

const FinalCTA = () => {
    return (
        <div className="flex flex-col gap-8 items-center justify-center bg-center bg-no-repeat bg-cover bg-[url('/assets/finalCTA.png')] main-padding h-96 py-16">
            <Heading title="No lo dudes, contactános."></Heading>
            <CtaButton></CtaButton>
        </div>
    );
};

export default FinalCTA;
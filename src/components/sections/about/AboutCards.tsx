import AboutCard from "@/components/cards/AboutCard";
import Heading from "@/components/text/Heading";
import aboutCardsData from "@/utils/aboutCards-data";

const AboutCards = () => {
    return (
        <div className="mt-48 flex flex-col items-center justify-start main-padding cursor-default">
            <Heading title="Sobre nosotros" subtitle="Estamos convencidos que el éxito de nuestros clientes, será nuestro propio éxito."></Heading>
            <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
                {aboutCardsData.map((obj, index) => (
                    <AboutCard 
                        key={index} 
                        title={obj.title} 
                        text={obj.text} 
                        image={obj.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default AboutCards;
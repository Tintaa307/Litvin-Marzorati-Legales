import ServiceCard from "@/components/cards/ServiceCard";
import Heading from "@/components/text/Heading";
import serviceData from "@/utils/service-data";

const Services = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-20 pt-20 mb-24 2xl:px-44 lg:px-28 px-5">
            <Heading title="Nuestros Servicios" subtitle="Nos caracteriza nuestra experiencia, brindando soluciones eficientes minimizando el uso de recursos."></Heading>
            <div className="flex flex-wrap justify-center max-w-[80rem]">
                {serviceData.map((object, index) => (
                    <ServiceCard 
                        key={index}
                        title={object.title}
                        icon={object.icon}
                        redirect={object.redirect}
                        tBorder={object.tBorder}
                        bBorder={object.bBorder}
                        lBorder={object.lBorder}
                        rBorder={object.rBorder}
                    />
                ))}
            </div>
        </div>
    );
};

export default Services;
import Link from "next/link";
import serviceData from "@/utils/service-data";

const ServicesHoverCard = () => {
    return (
        <>
            {
                serviceData.map((service, index) => (
                    <Link href={service.redirect} key={index}>
                        <h3 
                            className="text-base duration-200 font-medium whitespace-nowrap hover:text-black/60 transition-all">
                            {service.title}
                        </h3>
                    </Link> 
                ))
            }
        </>
    );
};

export default ServicesHoverCard;
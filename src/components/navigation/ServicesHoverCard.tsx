import Link from "next/link";

const ServicesHoverCard = () => {
    return (
        <>
            <Link href={'/servicios/metaverso-e-ia'}>
                <h3 className="text-base duration-200 font-medium whitespace-nowrap hover:text-black/60 transition-all">Asesoramiento legal en metavero e IA</h3>
            </Link>
            <Link href={'/servicios/propiedad-intelectual'}>
                <h3 className="text-base duration-200 font-medium whitespace-nowrap hover:text-black/60 transition-all">Asesoramiento en propiedad intelectual</h3>
            </Link>
            <Link href={'/servicios/internet'}>
                <h3 className="text-base duration-200 font-medium whitespace-nowrap hover:text-black/60 transition-all">Asesoramiento en internet</h3>
            </Link>
            <Link href={'/servicios/asesoramiento-general'}>
                <h3 className="text-base duration-200 font-medium whitespace-nowrap hover:text-black/60 transition-all">Asesoramiento legal general</h3>
            </Link>
            <Link href={'/servicios/emprendedores'}>
                <h3 className="text-base duration-200 font-medium whitespace-nowrap hover:text-black/60 transition-all">Emprendedores y nuevos proyectos</h3>
            </Link>
        </>
    );
};

export default ServicesHoverCard;
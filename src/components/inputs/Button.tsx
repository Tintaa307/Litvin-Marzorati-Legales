import Link from "next/link";

const CtaButton = () => {
    return (
        <Link href={'contacto'} className="sm:px-8 sm:py-3 px-6 py-2 rounded-lg bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162%">
            <h3 className="font-medium sm:text-lg sm:text-md">Contáctanos</h3>
        </Link>
    );
};

export default CtaButton;
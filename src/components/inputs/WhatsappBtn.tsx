import Image from 'next/image';
import WhatsappLogo from '../../../public/socials/whatsapp.svg';
import Link from 'next/link';

const WhatsappBtn = () => {
    return (
        <Link 
            href={'https://api.whatsapp.com/send/?phone=5491163606526&text&type=phone_number&app_absent=0'} 
            className="flex gap-3 py-3 px-4 bg-[#60D669] rounded-lg text-white w-fit"
            target='_blank'>
            <Image src={WhatsappLogo} alt='whatsapp'></Image>
        </Link>
    );
};

export default WhatsappBtn;
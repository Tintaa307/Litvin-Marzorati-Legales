import AwardLogo from '@/components/cards/AwardLogo';

import award1 from '../../../../public/awards/award1.png';
import award2 from '../../../../public/awards/award2.png';
import award3 from '../../../../public/awards/award3.png';
import award4 from '../../../../public/awards/award4.png';
import award5 from '../../../../public/awards/award5.png';
import award6 from '../../../../public/awards/award6.png';
import award7 from '../../../../public/awards/award7.png';
import award8 from '../../../../public/awards/award8.png';
import award9 from '../../../../public/awards/award9.png';

const LogoMarquee = () => {
    return (
        <div className="relative flex justify-center items-center overflow-x-hidden">
            <span className='absolute bg-gradient-to-r from-background from-10% via-transparent via-50% to-background to-90% w-full h-full z-10'></span>
            <div className="py-12 animate-marquee whitespace-nowrap flex">
                <AwardLogo src={award1}></AwardLogo>
                <AwardLogo src={award2}></AwardLogo>
                <AwardLogo src={award3}></AwardLogo>
                <AwardLogo src={award4}></AwardLogo>
                <AwardLogo src={award5}></AwardLogo>
                <AwardLogo src={award6}></AwardLogo>
                <AwardLogo src={award7}></AwardLogo>
                <AwardLogo src={award8}></AwardLogo>
                <AwardLogo src={award9}></AwardLogo>
            </div>
            <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
                <AwardLogo src={award1}></AwardLogo>
                <AwardLogo src={award2}></AwardLogo>
                <AwardLogo src={award3}></AwardLogo>
                <AwardLogo src={award4}></AwardLogo>
                <AwardLogo src={award5}></AwardLogo>
                <AwardLogo src={award6}></AwardLogo>
                <AwardLogo src={award7}></AwardLogo>
                <AwardLogo src={award8}></AwardLogo>
                <AwardLogo src={award9}></AwardLogo>
            </div>
        </div>
    );
};

export default LogoMarquee;
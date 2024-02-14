import metaverseIcon from '../../public/icons/Metaverse.svg';
import lightIcon from '../../public/icons/Light.svg';
import webIcon from '../../public/icons/Web.svg';
import generalIcon from '../../public/icons/General.svg';
import zapIcon from '../../public/icons/Zap.svg';

const serviceDataEng = [
    {
        title: "Legal Advice on Metaverse and AI",
        icon: metaverseIcon,
        redirect: "/servicios/metaverso-e-ia",
        tBorder: false,
        bBorder: true,
        lBorder: false,
        rBorder: true,
        pos: "first"
    },
    {
        title: "Legal Advice on Intellectual Property",
        icon: lightIcon,
        redirect: "/servicios/propiedad-intelectual",
        tBorder: false,
        bBorder: true,
        lBorder: false,
        rBorder: true,
        pos: "sec"
    },
    {
        title: "Legal Advice on Internet",
        icon: webIcon,
        redirect: "/servicios/internet",
        tBorder: false,
        bBorder: true,
        lBorder: false,
        rBorder: false,
        pos: "sec"
    },
    {
        title: "General Legal Advice",
        icon: generalIcon,
        redirect: "/servicios/asesoramiento-general",
        tBorder: false,
        bBorder: false,
        lBorder: false,
        rBorder: true,
        pos: "third"
    },
    {
        title: "Entrepreneurs and New Projects",
        icon: zapIcon,
        redirect: "/servicios/emprendedores",
        tBorder: false,
        bBorder: false,
        lBorder: false,
        rBorder: false,
        pos: "last"
    }
]

export default serviceDataEng;
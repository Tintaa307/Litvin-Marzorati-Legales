import metaverseIcon from '../../public/icons/Metaverse.svg';
import lightIcon from '../../public/icons/Light.svg';
import webIcon from '../../public/icons/Web.svg';
import generalIcon from '../../public/icons/General.svg';
import zapIcon from '../../public/icons/Zap.svg';

const serviceData = [
    {
        title: 'Asesoramiento legal en metaverso e IA',
        icon: metaverseIcon,
        redirect: '/servicios/metaverso-e-ia',
        tBorder: false,
        bBorder: true,
        lBorder: false,
        rBorder: true,
        pos: 'first',
    },
    {
        title: 'Asesoramiento en propiedad intelectual',
        icon: lightIcon,
        redirect: '/servicios/propiedad-intelectual',
        tBorder: false,
        bBorder: true,
        lBorder: false,
        rBorder: true,
        pos: 'sec',
    },
    {
        title: 'Asesoramiento en Internet',
        icon: webIcon,
        redirect: '/servicios/internet',
        tBorder: false,
        bBorder: true,
        lBorder: false,
        rBorder: false,
        pos: 'sec',
    },
    {
        title: 'Asesoramiento legal general',
        icon: generalIcon,
        redirect: '/servicios/asesoramiento-general',
        tBorder: false,
        bBorder: false,
        lBorder: false,
        rBorder: true,
        pos: 'third',
    },
    {
        title: 'Emprendedores y nuevos proyectos',
        icon: zapIcon,
        redirect: '/servicios/emprendedores',
        tBorder: false,
        bBorder: false,
        lBorder: false,
        rBorder: false,
        pos: 'last',
    },
]

export default serviceData;
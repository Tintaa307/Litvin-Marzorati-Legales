import Nav from "@/components/Nav";
import ContactHero from "@/components/sections/contact/ContactHero";
import MapSection from "@/components/sections/contact/MapSection";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacto = () => {
    return (
        <>  
            <Nav></Nav>
            <ContactHero></ContactHero>
            <MapSection></MapSection>
            <ToastContainer 
                position="bottom-right" 
                toastStyle={{ backgroundColor: "#FCEFE8" }}
            />
        </>
    );
}

export default Contacto;
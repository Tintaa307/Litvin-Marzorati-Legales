'use client';

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface Props {
    heading: string,
    options: { title: string; url: string; }[]
}

const ListDisplay = ({heading, options}: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    //Handles opening and closing of list
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col gap-4">
            <div onClick={handleClick} className="flex gap-2 items-center group">
                <h2>{heading}</h2>
                <h2 className={`transition-all ${!isOpen ? 'rotate-0' : 'rotate-90'}`}>{`>`}</h2>
            </div>
            <AnimatePresence>
                {   
                isOpen &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col gap-4 pl-2">
                        {
                            options.map((service, index) => (
                                <Link key={index} className="text-sm" href={service.url}>{service.title}</Link>
                            ))
                        }
                    </motion.div>
                }
           </AnimatePresence>
        </div>
    );
};

export default ListDisplay;
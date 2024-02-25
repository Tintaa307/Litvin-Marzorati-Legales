'use client';
import { sendEmail } from '@/app/_actions';
import React, { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import InputLabel from "./InputLabel";

interface Props {
    name: string,
    email: string,
    subject: string,
    message: string,
    btn: string,
    success: string,
    emailError: string,
    formError: string,
    accept: string,
}

const ContactForm = ({name, email, subject, message, btn, success, emailError, formError, accept}: Props) => {
    //Toast notifications
    const toastSuccess = () => toast.success(success);
    const toastEmailError = () => toast.error(emailError);
    const toastError = () => toast.error(formError);

    //Function called when form is submited
    const submitContact = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        if(data.email && data.name && data.message && data.check) {
            if(ValidateEmail(String(data.email))){
                submitEmail({ email: String(data.email), name: String(data.name), subject: String(data.subject), message: String(data.message) });
                e.currentTarget.reset();
                void toastSuccess();
                return;
            }
            void toastEmailError();
            return;
        }
        void toastError();
    }

        //Function for calling email api
        const submitEmail = async ({email, name, subject, message}: {email: string, name: string, subject?: string, message: string}) => {
            await sendEmail({email, name, subject, message})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log('Error', err)
                throw new Error('Network error.')
            })
        }
    
        //Function for validating email adress
        const ValidateEmail = (mail: string) => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
            {
                return (true) //Valid email
            }
            return (false) //Invalid
        }
    
    //Use state for checkbox
    const [isChecked, setIsChecked] = useState(false);

    return (
        <form onSubmit={submitContact} action="submit" className="md:w-[45%] w-full grid gap-6 items-start h-fit">
            <div className="flex flex-col gap-2">
                <InputLabel pos="01" text={name}></InputLabel>
                <input name="name" type="text" className="bg-transparent outline-none border-b border-black/30"/>
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel pos="02" text={email}></InputLabel>
                <input name="email" type="text" className="bg-transparent outline-none border-b border-black/30"/>
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel pos="03" text={subject}></InputLabel>
                <input name="subject" type="text" className="bg-transparent outline-none border-b border-black/30"/>
            </div>
            <div className="flex flex-col gap-2">
                <InputLabel pos="04" text={message}></InputLabel>
                <textarea name="message" className="w-full resize-none bg-transparent outline-none border-b border-black/30"/>
            </div>
            <div onClick={() => {setIsChecked(!isChecked)}} className="flex gap-2 text-xs font-light text-black/70">
                <input name="check" type="checkbox" checked={isChecked} />
                <h3 className='cursor-default'>{accept}</h3>
            </div>
            <div className="w-full flex justify-start">
                <button type="submit" className={`bg-accent-orange py-3 px-7 rounded-md w-28`}>{btn}</button>
            </div>
       </form>
    );
};

export default ContactForm;
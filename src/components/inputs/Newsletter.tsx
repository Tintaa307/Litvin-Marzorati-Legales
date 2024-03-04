'use client';
import { sendEmail } from "@/app/_actions";
import { useState } from "react";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    label: string,
    accept: string,
    submit: string,
    success: string,
    emailError: string,
    formError: string
}

const Newsletter = ({label, accept, submit, emailError, formError, success}: Props) => {
    //Toast notifications
    const toastSuccess = () => toast.success(success);
    const toastEmailError = () => toast.error(emailError);
    const toastCheckError = () => toast.error(formError);

    //Function called when form is submited
    const submitNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        if(data.email && data.check) {
            if(ValidateEmail(String(data.email))){
                submitEmail({ email: String(data.email)});
                e.currentTarget.reset();
                void toastSuccess();
                return;
            }
            void toastEmailError();
            return;
        }
        void toastCheckError();
    }

    //Function for calling email api
    const submitEmail = async ({email}: {email: string}) => {
        await sendEmail({email})
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
        <form onSubmit={submitNewsletter} action="submit" className="flex flex-col gap-4 text-sm">
            <div className="w-full flex flex-col gap-2">
                <h3>{label}</h3>
                <input name="email" type="text" className="bg-transparent outline-none border-b border-white/30 text-sm"/>
            </div>
            <div onClick={() => {setIsChecked(!isChecked)}} className="flex gap-2 text-xs font-light text-white/70">
                <input onChange={() => {}} name="check" type="checkbox" checked={isChecked} />
                <h3 className="cursor-default">{accept}</h3>
            </div>
            <div className="w-full flex justify-start">
                <button type="submit" className={`bg-accent-orange py-2 px-4 rounded-md w-20 text-black text-sm`}>{submit}</button>
            </div>
        </form>
    );
}

export default Newsletter;
"use client"

import React, { useState } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import InputLabel from "./InputLabel"
import { handleSubmit } from "@/actions/contact-action"
import { Loader2 } from "lucide-react"

interface Props {
  name: string
  email: string
  subject: string
  message: string
  btn: string
  success: string
  emailError: string
  formError: string
  accept: string
}

const ContactForm = ({
  name,
  email,
  subject,
  message,
  btn,
  success,
  emailError,
  formError,
  accept,
}: Props) => {
  //Use state for checkbox
  const [isChecked, setIsChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const formRef = React.useRef<HTMLFormElement>(null)

  const FormAction = async (formData: FormData) => {
    try {
      const res = await handleSubmit(formData)
      switch (res.status) {
        case 200:
          toast.success(res.message)
          setIsLoading(false)
          formRef?.current?.reset()
          break
        case 500:
          toast.error(res.message)
          setIsLoading(false)
          break
        default:
          toast.info("Error al enviar el mensaje")
          setIsLoading(false)
          break
      }
    } catch (error) {
      console.log(error)
      toast.error("Error al enviar el mensaje")
      setIsLoading(false)
    }
  }

  return (
    <form
      ref={formRef}
      action={FormAction}
      className="md:w-[45%] w-full grid gap-6 items-start h-fit"
    >
      <div className="flex flex-col gap-2">
        <InputLabel pos="01" text={name}></InputLabel>
        <input
          name="name"
          type="text"
          className="bg-transparent outline-none border-b border-black/30"
        />
      </div>
      <div className="flex flex-col gap-2">
        <InputLabel pos="02" text={email}></InputLabel>
        <input
          name="email"
          type="text"
          className="bg-transparent outline-none border-b border-black/30"
        />
      </div>
      <div className="flex flex-col gap-2">
        <InputLabel pos="03" text={subject}></InputLabel>
        <input
          name="subject"
          type="text"
          className="bg-transparent outline-none border-b border-black/30"
        />
      </div>
      <div className="flex flex-col gap-2">
        <InputLabel pos="04" text={message}></InputLabel>
        <textarea
          name="message"
          className="w-full resize-none bg-transparent outline-none border-b border-black/30"
        />
      </div>
      <div
        onClick={() => {
          setIsChecked(!isChecked)
        }}
        className="flex gap-2 text-xs font-light text-black/70"
      >
        <input name="check" type="checkbox" checked={isChecked} />
        <h3 className="cursor-default">{accept}</h3>
      </div>
      <div className="w-full flex justify-start">
        <button
          onClick={() => setIsLoading(true)}
          type="submit"
          className={`bg-accent-orange py-3 px-7 rounded-md w-28 flex items-center justify-center`}
        >
          {isLoading ? (
            <Loader2 className="w-6 h-6 text-white animate-spin" />
          ) : (
            btn
          )}
        </button>
      </div>
    </form>
  )
}

export default ContactForm

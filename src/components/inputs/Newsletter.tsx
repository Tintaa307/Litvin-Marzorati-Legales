"use client"
import { handleSubmit } from "@/actions/newsletter-action"
import { useState } from "react"

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface Props {
  label: string
  accept: string
  submit: string
  success: string
  emailError: string
  formError: string
}

const Newsletter = ({ label, accept, submit }: Props) => {
  //Use state for checkbox
  const [isChecked, setIsChecked] = useState(false)

  const FormAction = async (formData: FormData) => {
    const res = await handleSubmit(formData)
    switch (res.status) {
      case 200:
        toast.success(res.message)
        break
      case 500:
        toast.error(res.message)
        break
      default:
        toast.info("Error al enviar el mensaje")
        break
    }
  }

  return (
    <form action={FormAction} className="flex flex-col gap-4 text-sm">
      <div className="w-full flex flex-col gap-2">
        <h3>{label}</h3>
        <input
          name="email"
          type="text"
          className="bg-transparent outline-none border-b border-white/30 text-sm p-1"
        />
      </div>
      <div
        onClick={() => {
          setIsChecked(!isChecked)
        }}
        className="flex gap-2 text-xs font-light text-white/70"
      >
        <input
          onChange={() => {}}
          name="check"
          type="checkbox"
          checked={isChecked}
        />
        <h3 className="cursor-default">{accept}</h3>
      </div>
      <div className="w-full flex justify-start">
        <button
          type="submit"
          className={`bg-accent-orange py-2 px-4 rounded-md w-20 text-black text-sm`}
        >
          {submit}
        </button>
      </div>
    </form>
  )
}

export default Newsletter

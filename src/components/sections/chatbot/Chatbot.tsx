"use client"

import { cn } from "@/lib/utils"
import { useChat } from "ai/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    messages.map((m) => {
      console.log(m)
    })
  }, [messages])

  return (
    <div
      className={cn(
        "fixed bottom-7 right-7 max-w-[200px] h-12 rounded-md flex flex-col gap-1 bg-[#FCEFE8] shadow-2xl border border-border z-40",
        {
          "min-h-[603px] min-w-[465px] transition-all duration-200": open,
        }
      )}
    >
      <header
        onClick={() => setOpen(!open)}
        className={cn(
          "w-full h-12 flex items-center justify-center cursor-pointer px-6 bg-gradient-to-r from-accent-brown from-[-39.43%] to-accent-orange to-162% rounded-md",
          {
            "border-b-[1px] border-b-black/20 px-0": open,
          }
        )}
      >
        <h4 className="text-black font-medium font-poppins">Chatbot 🤖</h4>
      </header>
      <main
        className={cn("relative flex-1 justify-start items-start hidden px-4", {
          block: open,
        })}
      >
        <div className="w-full h-[470px] flex flex-col gap-2 overflow-y-auto">
          {messages.map((m) => (
            <div
              key={m.id}
              className={cn("max-w-1/2 h-max py-2 flex", {
                "justify-end ": m.role === "user",
                "justify-start": m.role !== "user",
              })}
            >
              <span
                className={cn(
                  "relative w-max h-max px-4 py-2 rounded-3xl z-10",
                  {
                    "bg-[#D9D9D9] text-sm": m.role === "user",
                    "bg-[#F9AD42] text-black text-sm": m.role !== "user",
                  }
                )}
              >
                <ReactMarkdown>{m.content}</ReactMarkdown>
              </span>
            </div>
          ))}
        </div>
        <form
          className="absolute w-full bottom-0 flex items-center justify-center py-4 border-t-[1px] border-t-black/20 z-30 left-0 bg-[#FCEFE8]"
          onSubmit={handleSubmit}
        >
          <input
            value={input}
            placeholder="Tu mensaje..."
            className="w-[80%] h-10 text-black bg-transparent border-b-[1px] border-b-black px-3 font-normal text-sm outline-none placeholder:text-black/80"
            onChange={handleInputChange}
          />
        </form>
      </main>
    </div>
  )
}

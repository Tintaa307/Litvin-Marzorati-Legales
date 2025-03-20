"use client"

import { createContext } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const QueryContext = createContext({})

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  )
}

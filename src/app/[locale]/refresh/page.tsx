"use client"

import axios from "axios"
import React, { useEffect } from "react"

const Refresh = () => {
  const handleRefresh = async () => {
    try {
      await axios.get("/oauth/token").then((response) => {
        console.log(response)
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleRefresh()
  }, [])

  return <div></div>
}

export default Refresh

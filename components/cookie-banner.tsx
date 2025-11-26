"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("dreamoras-cookies-accepted")
    if (!hasAcceptedCookies) {
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("dreamoras-cookies-accepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-midnight-navy/95 backdrop-blur-lg border border-misty-lilac/30 rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-pale-cream/90 text-sm font-light text-center sm:text-left">
            This website uses cookies to improve your experience and promote peaceful browsing. By continuing, you agree
            to our use of cookies.
          </p>
          <Button
            onClick={acceptCookies}
            className="bg-misty-lilac text-midnight-navy hover:bg-misty-lilac/90 whitespace-nowrap shrink-0 transition-all duration-300"
          >
            Accept & Continue
          </Button>
        </div>
      </div>
    </div>
  )
}

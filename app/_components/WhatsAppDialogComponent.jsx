"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FaWhatsapp } from "react-icons/fa";
export default function WhatsAppDialog() {
  const [open, setOpen] = useState(false)

  const whatsappNumber = "+905385291140" 
  const defaultMessage = "Hello, I would like to inquire about hair transplant services."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Dialog open={open} onOpenChange={setOpen}>
        {/* Floating WhatsApp Button */}

        <DialogTrigger asChild>
        <Button
            aria-label="Contact us on WhatsApp"
            title="Contact us on WhatsApp"
            className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-green-600"
        >
            <FaWhatsapp className="w-8 h-8" />
        </Button>
        </DialogTrigger>
        {/* Dialog Content */}
        <DialogContent className="w-96">
          <DialogHeader>
            <DialogTitle>Contact us on WhatsApp</DialogTitle>
          </DialogHeader>

          <p className="my-4 text-sm">
            Click below to start a for hair transplant We'll respond as soon as possible.
          </p>

          <DialogFooter>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 text-white hover:bg-green-600 w-full">
                Open WhatsApp
              </Button>
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
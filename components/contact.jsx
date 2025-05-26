"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Calendar, Music, Send, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_qs9pkyj", // Service ID
        "template_3e7ctpw", // Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventType: formData.eventType,
          date: formData.date,
          message: formData.message,
        },
        "GN-XXJyvykVtz0qnQ", // Public Key
      )

      setSubmitStatus("success")

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        date: "",
        message: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Interested in booking Reuben for your event? Have questions about his performances? Fill out the form below
            to get in touch.
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-b from-red-950 to-black p-8 rounded-lg border border-red-800">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-900 p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Location</h4>
                  <p className="text-gray-300">Kearney, Nebraska</p>
                  <p className="text-gray-400 text-sm">Available for performances in surrounding areas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-900 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-gray-300">reubenadkins@yahoo.com</p>
                  <p className="text-gray-400 text-sm">For bookings and inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-900 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Phone</h4>
                  <p className="text-gray-300">(402) 269-5582</p>
                  <p className="text-gray-400 text-sm">Monday to Friday, 9AM to 6PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-900 p-3 rounded-full flex-shrink-0">
                  <Music className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Performance Types</h4>
                  <p className="text-gray-300">Live bands, retirement homes, weddings, street dances, private events</p>
                  <p className="text-gray-400 text-sm">Customized setlists available upon request</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-900 p-3 rounded-full flex-shrink-0">
                  <Calendar className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Availability</h4>
                  <p className="text-gray-300">Bookings available for 2025-2026</p>
                  <p className="text-gray-400 text-sm">Contact for specific dates and details</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-red-950 to-black p-8 rounded-lg border border-red-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            {submitStatus === "success" ? (
              <div className="bg-green-900/30 border border-green-700 rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-300 mb-4">
                  Thank you for reaching out. Reuben will get back to you as soon as possible.
                </p>
                <Button onClick={() => setSubmitStatus(null)} className="bg-green-600 hover:bg-green-700 text-white">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-red-900/50 border-red-700 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-red-900/50 border-red-700 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-red-900/50 border-red-700 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-300 mb-1">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full rounded-md border border-red-700 bg-red-900/50 text-white px-3 py-2"
                    >
                      <option value="">Select Event Type</option>
                      <option value="band">Live Band Performance</option>
                      <option value="retirement">Retirement Home</option>
                      <option value="wedding">Wedding</option>
                      <option value="street-dance">Street Dance</option>
                      <option value="private">Private Event</option>
                      <option value="community">Community Gathering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
                    Preferred Date (if applicable)
                  </label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-red-900/50 border-red-700 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="bg-red-900/50 border-red-700 text-white"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 hover:bg-red-700 text-white w-full py-6"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm mt-2">
                    There was an error sending your message. Please try again or contact Reuben directly at
                    reubenadkins@yahoo.com.
                  </p>
                )}

                <p className="text-xs text-gray-500 mt-4">
                  Your information will only be used to respond to your inquiry and will not be shared with third
                  parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

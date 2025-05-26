"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Quarter Note SVG Component with flag
const QuarterNote = ({ className, filled = true }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
    {/* Note head (oval) */}
    <ellipse
      cx="7"
      cy="17"
      rx="3"
      ry="2"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Note stem */}
    <line x1="10" y1="17" x2="10" y2="5" strokeWidth="1.5" />
    {/* Flag at the top */}
    <path
      d="M10 5 Q15 3 18 6 Q15 8 10 7 Z"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
)


export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [formVisible, setFormVisible] = useState(false)
  const [newReview, setNewReview] = useState({
    name: "",
    role: "",
    rating: 5,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  // Load testimonials from localStorage on component mount
  useEffect(() => {
    const savedTestimonials = localStorage.getItem("testimonials")
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials))
    } else {
      // If no saved testimonials, use the initial ones
      setTestimonials([])
      localStorage.setItem("testimonials", JSON.stringify([]))
    }
  }, [])

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(testimonials.length / 3) - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Math.ceil(testimonials.length / 3) - 1 ? 0 : prevIndex + 1))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewReview({
      ...newReview,
      [name]: value,
    })
  }

  const handleRatingChange = (rating) => {
    setNewReview({
      ...newReview,
      rating,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create new review object
    const review = {
      id: testimonials.length + 1,
      ...newReview,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    }

    // Simulate API delay
    setTimeout(() => {
      // Add new review to testimonials
      const updatedTestimonials = [...testimonials, review]
      setTestimonials(updatedTestimonials)

      // Save to localStorage
      localStorage.setItem("testimonials", JSON.stringify(updatedTestimonials))

      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset form after 2 seconds
      setTimeout(() => {
        setNewReview({
          name: "",
          role: "",
          rating: 5,
        })
        setSubmitSuccess(false)
        setFormVisible(false)
      }, 2000)
    }, 1000)
  }

  // Calculate visible testimonials for current carousel page
  const itemsPerPage = 3
  const startIndex = currentIndex * itemsPerPage
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage)

  // Function to render quarter note rating
  const renderQuarterNoteRating = (rating) => {
    const fullNotes = Math.floor(rating)
    const hasHalfNote = rating % 1 !== 0
    const notes = []

    // Add full quarter notes
    for (let i = 0; i < fullNotes; i++) {
      notes.push(<QuarterNote key={i} className="h-6 w-6 text-red-500" filled={true} />)
    }

    // Add half note (using unfilled quarter note)
    if (hasHalfNote) {
      notes.push(<QuarterNote key="half" className="h-6 w-6 text-red-500 opacity-50" filled={true} />)
    }

    return notes
  }

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Client Reviews</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what people are saying about Reuben's performances
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full px-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 text-white hover:bg-black/70 rounded-full h-10 w-10"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-black/50 text-white hover:bg-black/70 rounded-full h-10 w-10"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-red-950/30 p-6 rounded-lg border border-red-800 hover:border-red-600 transition-colors text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-4">{renderQuarterNoteRating(testimonial.rating)}</div>
                <p className="font-bold text-white text-lg mb-1">{testimonial.name}</p>
                <p className="text-red-400 text-sm mb-2">{testimonial.role}</p>
                <p className="text-gray-500 text-xs">{testimonial.date}</p>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(Math.ceil(testimonials.length / itemsPerPage))].map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? "w-6 bg-red-600" : "w-2 bg-gray-600"
                }`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Add Review Button */}
        <div className="text-center mt-12">
          {!formVisible ? (
            <Button onClick={() => setFormVisible(true)} className="bg-red-600 hover:bg-red-700 text-white">
              Leave a Review
            </Button>
          ) : (
            <div className="max-w-md mx-auto bg-red-950/30 p-6 rounded-lg border border-red-800">
              {submitSuccess ? (
                <div className="text-center py-4">
                  <p className="text-green-400 text-lg font-bold mb-2">Thank you for your review!</p>
                  <p className="text-gray-300">Your review has been submitted successfully.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-4">Share Your Experience</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={newReview.name}
                        onChange={handleInputChange}
                        required
                        className="bg-red-900/50 border-red-700 text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Relation/Role
                      </label>
                      <Input
                        id="role"
                        name="role"
                        value={newReview.role}
                        onChange={handleInputChange}
                        placeholder="Fan, Event Organizer, etc."
                        required
                        className="bg-red-900/50 border-red-700 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Your Rating</label>
                      <div className="flex justify-center gap-1">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            onClick={() => handleRatingChange(rating)}
                            className="focus:outline-none"
                          >
                            <QuarterNote
                              className={`h-6 w-6 ${rating <= newReview.rating ? "text-red-500" : "text-gray-600"}`}
                              filled={rating <= newReview.rating}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-red-600 hover:bg-red-700 text-white flex-1"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            Submit Review
                          </span>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setFormVisible(false)}
                        className="border-red-600 text-red-400 hover:bg-red-900/20"
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

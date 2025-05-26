"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LegalModal({ isOpen, onClose, type }) {
  if (!isOpen) return null

  const privacyContent = (
    <div className="prose prose-invert max-w-none">
      <p className="text-gray-300 mb-6">
        <strong>Effective Date:</strong> January 25, 2025
      </p>

      <p className="text-gray-300 mb-8">
        Thank you for visiting Reuben Adkins' website. Your privacy is important to us. This Privacy Policy explains how
        we collect, use, and protect the information you provide on this site.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
      <p className="text-gray-300 mb-4">We only collect the following information when you voluntarily submit it:</p>
      <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
        <li>Your name</li>
        <li>Your email address</li>
        <li>Any review or message you leave</li>
      </ul>

      <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
      <p className="text-gray-300 mb-4">We may use your information to:</p>
      <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
        <li>Respond to your message or inquiry</li>
        <li>Display your review (with your first name, if provided)</li>
        <li>Improve our website or services</li>
      </ul>

      <h2 className="text-2xl font-bold text-white mb-4">3. Sharing Your Information</h2>
      <p className="text-gray-300 mb-8">
        We do not sell, trade, or share your personal information with third parties, except when required by law.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
      <p className="text-gray-300 mb-8">
        We take reasonable steps to protect the information you provide from unauthorized access or disclosure. However,
        no method of transmission over the Internet is 100% secure.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
      <p className="text-gray-300 mb-4">You may request to:</p>
      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
        <li>Review the personal information we have about you</li>
        <li>Ask us to delete your information</li>
      </ul>
      <p className="text-gray-300 mb-8">
        To do so, contact us at:{" "}
        <a href="mailto:reubenadkins@yahoo.com" className="text-red-400 hover:text-red-300">
          reubenadkins@yahoo.com
        </a>
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">6. Changes to This Policy</h2>
      <p className="text-gray-300 mb-8">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
        effective date.
      </p>

      <div className="border-t border-red-800 pt-8 mt-8">
        <p className="text-gray-400 text-sm">
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:reubenadkins@yahoo.com" className="text-red-400 hover:text-red-300">
            reubenadkins@yahoo.com
          </a>
        </p>
      </div>
    </div>
  )

  const termsContent = (
    <div className="prose prose-invert max-w-none">
      <p className="text-gray-300 mb-6">
        <strong>Effective Date:</strong> January 25, 2025
      </p>

      <p className="text-gray-300 mb-8">
        Welcome to Reuben Adkins' website. By using this site, you agree to the following terms. If you do not agree,
        please do not use the site.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">1. Use of the Site</h2>
      <p className="text-gray-300 mb-8">
        You may browse the site and submit a review or contact form. You agree to use the site only for lawful purposes
        and not to post anything offensive, abusive, or harmful.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">2. Submitted Content</h2>
      <p className="text-gray-300 mb-4">By submitting a review or message:</p>
      <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
        <li>You confirm the content is your own and does not violate anyone else's rights.</li>
        <li>
          You give us permission to display your review (with your first name, if provided) on the website or in
          promotional materials.
        </li>
        <li>We may edit or remove content at our discretion.</li>
      </ul>

      <h2 className="text-2xl font-bold text-white mb-4">3. No Guarantees</h2>
      <p className="text-gray-300 mb-8">
        We aim to keep the site up and running smoothly, but we cannot guarantee it will always be available or
        error-free.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
      <p className="text-gray-300 mb-8">
        We are not responsible for any damages resulting from your use of the site. You use it at your own risk.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">5. Changes to the Terms</h2>
      <p className="text-gray-300 mb-8">
        We may update these Terms from time to time. Changes will be posted here, and your continued use of the site
        means you accept the updated terms.
      </p>

      <h2 className="text-2xl font-bold text-white mb-4">6. Contact</h2>
      <p className="text-gray-300 mb-8">
        If you have any questions about these Terms, please reach out to:{" "}
        <a href="mailto:reubenadkins@yahoo.com" className="text-red-400 hover:text-red-300">
          reubenadkins@yahoo.com
        </a>
      </p>

      <div className="border-t border-red-800 pt-8 mt-8">
        <p className="text-gray-400 text-sm">
          These terms are effective as of the date listed above and govern your use of this website. By continuing to
          use the site, you acknowledge that you have read and agree to these terms.
        </p>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-red-950/90 border border-red-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-red-800">
          <h2 className="text-2xl font-bold text-white font-display">
            {type === "privacy" ? "Privacy Policy" : "Terms of Service"}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-red-900/50">
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {type === "privacy" ? privacyContent : termsContent}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-red-800 flex justify-end">
          <Button onClick={onClose} className="bg-red-600 hover:bg-red-700 text-white">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}

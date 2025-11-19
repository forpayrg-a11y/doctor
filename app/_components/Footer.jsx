import Link from 'next/link'

function Footer() {
  return (
    <footer className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hair Transplant Clinic</h3>
            <p className="text-gray-300">
              Professional hair restoration services with proven results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="text-gray-300">
                About Us
              </Link>
              <Link href="/services" className="text-gray-300">
                Services
              </Link>
              <Link href="/contact" className="text-gray-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-gray-300 space-y-2">
              <p>+90 555 123 4567</p>
              <p>info@hairclinic.com</p>
              <p>Istanbul, Turkey</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hair Transplant Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.webp"
                alt="E-Cell Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-montserrat font-bold text-xl">E-Cell NIT Bhopal</span>
            </div>
            <p className="font-roboto text-white/70 mb-4">
              Fostering innovation and entrepreneurship among students.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/ecellnitbhopal" className="text-white/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://x.com/ecell_nitb" className="text-white/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/ecell_nitb/" className="text-white/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.linkedin.com/company/ecell-manit/posts/?feedView=all" className="text-white/70 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="font-inter text-white/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#recruitment" className="font-inter text-white/70 hover:text-primary transition-colors">
                  Verticals
                </Link>
              </li>
              <li>
                <Link href="#events" className="font-inter text-white/70 hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#rules" className="font-inter text-white/70 hover:text-primary transition-colors">
                  Rules
                </Link>
              </li>
              <li>
                <Link href="/apply" className="font-inter text-white/70 hover:text-primary transition-colors">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="font-montserrat text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="font-roboto text-white/70">MANIT Bhopal, Madhya Pradesh, India - 462003</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <Link
                  href="mailto:ecell@nitbhopal.ac.in"
                  className="font-roboto text-white/70 hover:text-primary transition-colors"
                >
                  contact@ecellnitb.in
                </Link>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-6 text-primary mr-2 mt-0.5" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <Link
                    href="tel:+917223841399"
                    className="font-roboto text-white/70 hover:text-primary transition-colors"
                  >
                    Muskan Yadav: {`+91 72238 41399`}
                  </Link>
                  <Link
                    href="tel:+917607476106"
                    className="font-roboto text-white/70 hover:text-primary transition-colors"
                  >
                    Sannidhya Srivastava: {`+91 76074 76106`}
                  </Link>
                  <Link
                    href="tel:+919479606424"
                    className="font-roboto text-white/70 hover:text-primary transition-colors"
                  >
                    Nidhi Singh Thakur: {`+91 94796 06424`}
                  </Link>
                  <Link
                    href="tel:+918817263318"
                    className="font-roboto text-white/70 hover:text-primary transition-colors"
                  >
                    Dev Bansal: {`+91 88172 63318`}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="font-inter text-sm text-white/70">
            &copy; {new Date().getFullYear()} E-Cell NIT Bhopal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


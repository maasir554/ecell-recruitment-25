import Link from "next/link"
import NextLink from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10 w-full flex items-center justify-center">
      <div className="w-full max-w-6xl px-4">
        <div className="flex flex-row flex-wrap gap-6 justify-around px-4">
          {/* About */}
          <div className="flex flex-col gap-4 max-w-xs">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="https://ecellnitb.in"
              target="_blank"
            >
              <Image
                src="/logo.webp"
                alt="E-Cell NITB"
                width={40}
                height={40}
                className="mr-3"
              />
              <span className="gap-1">
                <p className="font-bold text-md">Entrepreneurship Cell</p>
                <p className="text-xs text-neutral-200">
                  ROLTA Incubation Center
                </p>
                <p className="text-xs text-neutral-200">MANIT, Bhopal</p>
              </span>
            </NextLink>
              <p className="font-roboto text-white/70 text-sm">
                {`Fostering innovation and entrepreneurship among students.`}
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
            <h3 className=" text-lg font-bold text-white mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="font-inter text-white/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#recruitment" className="font-inter text-white/70 hover:text-primary transition-colors">
                  Verticals
                </Link>
              </li>
              <li>
                <Link href="/#events" className="font-inter text-white/70 hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/#rules" className="font-inter text-white/70 hover:text-primary transition-colors">
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
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-2">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <MapPin className="w-6 text-primary mr-2 mt-0.5" />
                <span className="font-roboto text-white/70">{`MANIT Bhopal, Madhya Pradesh, India - 462003`}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-6 text-primary" />
                <Link
                  href="mailto:ecell@nitbhopal.ac.in"
                  className="font-roboto text-white/70 hover:text-primary transition-colors"
                >
                  {`contact@ecellnitb.in`}
                </Link>
              </li>
              <li className="flex flex-col items-start gap-3">
                <span className="flex gap-2 items-center">
                  <Phone className="h-5 w-6 text-primary" /> Phone numbers:
                </span>
                <div className="flex  flex-col gap-2 pl-8 text-white/50">
                  <Link
                    href="tel:+917223841399"
                    className="font-roboto hover:text-primary transition-colors"
                  >
                    {`Muskan Yadav: +91 72238 41399`}
                  </Link>
                  <Link
                    href="tel:+917607476106"
                    className="font-roboto hover:text-primary transition-colors"
                  >
                   {`Sannidhya Srivastava: +91 76074 76106`}
                  </Link>
                  <Link
                    href="tel:+919479606424"
                    className="font-roboto hover:text-primary transition-colors"
                  >
                    {`Nidhi Singh Thakur: +91 94796 06424`}
                  </Link>
                  <Link
                    href="tel:+918817263318"
                    className="font-roboto hover:text-primary transition-colors"
                  >
                   {` Dev Bansal: +91 88172 63318`}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="font-inter text-xs text-white/70">
            Copyright &copy; {new Date().getFullYear()}{":"} {`Entrepreneurship Cell NIT Bhopal. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}


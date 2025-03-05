"use client";
import { useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";

import { Link } from "@heroui/link";

import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";

import clsx from "clsx";

import { siteConfig } from "@/config/site";

import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaChevronRight,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar
      maxWidth="full"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className="flex fixed justify-between"
      isBordered
      shouldHideOnScroll
    >
      <div className="flex">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
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
            <span>
              <p className="font-bold text-inherit">Entrepreneurship Cell</p>
              <p className="text-xs text-neutral-200">
                NIT Bhopal | Recruitment '25
              </p>
            </span>
          </NextLink>
        </NavbarBrand>
      </div>

      <div>
        <ul className="hidden justify-start md:flex gap-4 ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium border-y-2 border-transparent"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex gap-2">
        <Link isExternal aria-label="Linkedin" href={siteConfig.links.linkedin}>
          <FaLinkedin className="text-default-500 text-2xl" />
        </Link>
        <Link
          isExternal
          aria-label="Instagram"
          href={siteConfig.links.instagram}
        >
          <FaInstagram className="text-default-500 text-2xl" />
        </Link>
        <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
          <FaXTwitter className="text-default-500 text-2xl" />
        </Link>
        <Link isExternal aria-label="Facebook" href={siteConfig.links.facebook}>
          <FaFacebook className="text-default-500 text-2xl" />
        </Link>
      </div>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />

      <NavbarMenu className="bg-gradient-to-b from-yellow-500/10 to-transparent overflow-hidden">
        <div className="mx-4 mt-2 flex flex-col gap-0">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              className={
                "py-4 border-b-1 border-neutral-500/20 flex justify-between items-center "
              }
            >
              <Link
                color="foreground"
                href={item.href}
                size="lg"
                className="w-full font-bold flex justify-between"
                onPress={() => setIsMenuOpen(false)}
              >
                <span>{item.label}</span>
                <FaChevronRight className="opacity-75" />
              </Link>
            </NavbarMenuItem>
          ))}

          <div className="w-full flex items-center justify-center gap-6 h-[100px]">
            <Link
              isExternal
              aria-label="Linkedin"
              href={siteConfig.links.linkedin}
            >
              <FaLinkedin className="text-default-500 text-2xl" />
            </Link>
            <Link
              isExternal
              aria-label="Instagram"
              href={siteConfig.links.instagram}
            >
              <FaInstagram className="text-default-500 text-2xl" />
            </Link>
            <Link
              isExternal
              aria-label="Twitter"
              href={siteConfig.links.twitter}
            >
              <FaXTwitter className="text-default-500 text-2xl" />
            </Link>
            <Link
              isExternal
              aria-label="Facebook"
              href={siteConfig.links.facebook}
            >
              <FaFacebook className="text-default-500 text-2xl" />
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

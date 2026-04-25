"use client";

import { FaDribbble, FaFacebook, FaInstagram } from "react-icons/fa";
import { companyLinks, serviceLinks } from "../helper/helpers";
import ButtonThree from "../ui/ButtonThree";
import Container from "../ui/Container";
import { Flex, Grid, Stack } from "../ui/Responsive";
import { FaXTwitter } from "react-icons/fa6";

// ─── Marquee heading
function MarqueeHeading() {
  const text = "BUSINESS · CONSULTING · ";
  const repeated = text.repeat(6);
  return (
    <div className="overflow-hidden">
      <div className="animate-marquee py-4">
        <span className="headingOne font-heading font-black text-primary whitespace-nowrap tracking-tight">
          {repeated}
        </span>
      </div>
    </div>
  );
}

// ─── Hero CTA section
function HeroCTA() {
  return (
    <Container size="md">
      <Stack align="center" className="pt-[35px] text-center">
        <p className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-primary max-w-[625px] underline underline-offset-[4px]">
          Have an idea in your mind? Let&apos;s make something great together
        </p>
        <div
          className="inline-flex items-center gap-2.5 border border-primary text-primary text-sm font-medium rounded-[90px] px-7 py-3.5 cursor-pointer hover:bg-black/5 transition-colors group mb-10 lg:mb-[140px]"
          onClick={() => console.log("clicked")}
        >
          <ButtonThree
            frontText="Let's build together"
            backText="Let's Talk."
            backgroundColor="transparent"
            textColor="#02090F"
            fontSize={14}
            paddingTop={0}
            paddingBottom={0}
            paddingLeft={0}
            paddingRight={0}
          />
          <span className="inline-block transition-transform group-hover:translate-x-1">
            <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
              <path
                d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
                fill="#02090F"
              />
            </svg>
          </span>
        </div>
      </Stack>
    </Container>
  );
}

// ─── Contact Form Card
function ContactCard() {
  return (
    <div className="bg-bg-secondaryFore shadow-xl px-[38px] xl:px-[52px] py-[30px] xl:py-[45px] w-full max-w-[390px] xl:max-w-[430px]">
      <Stack gap="md">
        <p className="headingFive font-bold text-primary leading-snug">
          Have questions? Get in touch now!
        </p>
        <Stack gap="sm">
          <input
            type="text"
            placeholder="Name"
            className="border-b border-primary/10 outline-none py-2.5 text-sm text-primary placeholder:text-tarnary bg-transparent focus:border-secondary transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-b border-primary/10 outline-none py-2.5 text-sm text-primary placeholder:text-tarnary bg-transparent focus:border-secondary transition-colors"
          />
          <textarea
            placeholder="Message"
            rows={3}
            className="border-b border-primary/10 outline-none py-2.5 text-sm text-primary placeholder:text-tarnary bg-transparent resize-none focus:border-secondary transition-colors"
          />
        </Stack>
        <div
          className="self-start inline-flex items-center gap-2.5 bg-secondary text-white text-sm font-medium rounded-[90px] px-6 py-3 cursor-pointer hover:bg-secondary/90 transition-colors group mt-1"
          onClick={() => console.log("send message")}
        >
          <ButtonThree
            frontText="Send Message"
            backText="Let's Talk."
            backgroundColor="transparent"
            textColor="#ffffff"
            fontSize={14}
            paddingTop={0}
            paddingBottom={0}
            paddingLeft={0}
            paddingRight={0}
          />
          <span className="inline-block transition-transform group-hover:translate-x-1">
            <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
              <path
                d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
                fill="#ffffff"
              />
            </svg>
          </span>
        </div>
      </Stack>
    </div>
  );
}

const socialLinks = [
  { icon: FaFacebook, href: "#" },
  { icon: FaXTwitter, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaDribbble, href: "#" },
];

// ─── Dark Footer Section
function FooterDark() {
  return (
    <div className="bg-bg-secondaryThree text-white rounded-tl-[15px]">
      {/* ── Hours + Appointment bar ── */}
      <div className="w-full border-b border-white/10">
        <div className="mx-auto max-w-[1265px] flex flex-col sm:flex-row">
          {/* LEFT: orange */}
          <div className="bg-secondary flex items-center justify-center px-8 py-4 sm:flex-1 lg:pl-[480px] xl:pl-[500px]">
            <p className="text-sm text-white font-medium text-center">
              Saturday – Thursday : 8:30 am – 10:45 pm
            </p>
          </div>

          {/* RIGHT: dark/transparent */}
          <div
            className="flex items-center justify-between gap-2.5 px-7 py-4 cursor-pointer hover:bg-white/5 transition-colors group border-t border-white/10 sm:border-t-0 sm:border-l sm:border-white/10 sm:flex-1"
            onClick={() => console.log("appointment")}
          >
            <ButtonThree
              frontText="Call for an appointment"
              backText="Let's Talk."
              backgroundColor="transparent"
              textColor="#ffffff"
              fontSize={14}
              paddingTop={0}
              paddingBottom={0}
              paddingLeft={0}
              paddingRight={0}
            />
            <span className="inline-block transition-transform group-hover:translate-x-1">
              <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
                <path
                  d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
                  fill="#ffffff"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* ── Footer links + newsletter ── */}
      <Container size="">
        <div className="py-8 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:pl-[460px] xl:pl-[480px]">
            {/* Company */}
            <Stack gap="sm">
              <p className="font-bold text-white headingSixAlter mb-2">
                Company
              </p>
              {companyLinks.map((link) => (
                <Flex key={link} gap="xs" align="center">
                  <span className="w-2 h-2 rounded-full bg-[#999999] shrink-0" />
                  <a
                    href="#"
                    className="para-lg text-[#999999] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </Flex>
              ))}
            </Stack>

            {/* Service Link */}
            <Stack gap="sm">
              <p className="font-bold text-white headingSixAlter mb-2">
                Service Link
              </p>
              {serviceLinks.map((link) => (
                <Flex key={link} gap="xs" align="center">
                  <span className="w-2 h-2 rounded-full bg-[#999999] shrink-0" />
                  <a
                    href="#"
                    className="para-lg text-[#999999] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </Flex>
              ))}
            </Stack>

            {/* Newsletter */}
            <Stack gap="sm">
              <p className="font-bold text-white headingSixAlter mb-2">
                Newsletter
              </p>
              <p className="para-lg text-[#999999] max-w-[384px]">
                Stay updated with design tips, creative strategy, and industry
                insights.
              </p>
              <Flex gap="none" align="center" className="mt-2">
                <div className="relative flex-1 min-w-0">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full bg-bg-secondaryTwo border border-white/20 pl-6 pr-12 py-[16px] rounded-[10px] text-sm text-primary placeholder:text-primary outline-none focus:border-secondary transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      width="21"
                      height="16"
                      viewBox="0 0 21 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.89064 16.0032H17.7147C19.3726 16.0032 20.33 15.0374 20.33 13.1242V2.86989C20.33 0.965746 19.3635 0 17.4385 0H2.61486C0.966821 0 0 0.956631 0 2.86989V13.1238C0 15.0461 0.975857 16.0028 2.89143 16.0028M9.06989 8.47058L2.1175 1.55145C2.31982 1.46784 2.55907 1.42147 2.84468 1.42147H17.4943C17.7795 1.42147 18.0282 1.46784 18.24 1.57008L11.2974 8.47098C10.9014 8.87004 10.5514 9.04678 10.1833 9.04678C9.81475 9.04678 9.46511 8.87004 9.06911 8.47098M1.408 13.1242V2.77716L6.70214 8.01604L1.41743 13.2815C1.40839 13.2351 1.40839 13.1792 1.40839 13.1238M18.9212 2.87901V13.2537L13.6636 8.01565L18.9216 2.8053L18.9212 2.87901ZM2.84468 14.5825C2.57754 14.5825 2.35675 14.5452 2.16346 14.4616L7.66936 8.97228L8.26807 9.5667C8.91236 10.2075 9.52914 10.477 10.1833 10.477C10.8275 10.477 11.4538 10.2075 12.0984 9.5667L12.6967 8.97228L18.194 14.4521C18.0003 14.5452 17.7611 14.5821 17.4939 14.5821L2.84468 14.5825Z"
                        fill="#555555"
                      />
                    </svg>
                  </span>
                </div>
              </Flex>
            </Stack>
          </div>
        </div>
      </Container>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <Container size="">
          <div className="flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            {/* Legal links */}
            <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start">
              {["Privacy Policy", "Terms and Conditions", "Support"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-[16px] text-white hover:text-secondary transition-colors whitespace-nowrap"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            {/* Social icons */}
            <div className="flex gap-3 items-center justify-center">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-secondary hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-[]16px] text-white text-center md:text-right whitespace-nowrap">
              Copyright © 2026 Bitox. All Rights Reserved.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

// ─── Main Export
export default function BusinessFooterSection() {
  return (
    <section className="w-full bg-bg-secondaryTwo overflow-hidden">
      {/* Part 1: Light bg — Marquee + CTA */}
      <MarqueeHeading />
      <HeroCTA />

      {/* Part 2: Transition zone — card overlaps footer */}
      <div className="relative">
        {/* ── Mobile: card in normal flow above footer ── */}
        <div className="lg:hidden flex justify-center px-4 pb-0">
          <ContactCard />
        </div>

        {/* ── Desktop: card absolutely positioned, overlapping footer ── */}
        <div className="hidden lg:block absolute top-23 z-10 pointer-events-none right-[65%]">
          <div className="pointer-events-auto inline-block -translate-y-[calc(50%-40px)]">
            <ContactCard />
          </div>
        </div>

        {/* Footer dark — gets top padding on desktop so card doesn't cover content */}
        <FooterDark />
      </div>
    </section>
  );
}
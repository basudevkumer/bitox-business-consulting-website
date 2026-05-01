"use client";
import contact_logo from "../../../public/images/contact/contact_logo.png";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="bg-bg-secondaryOne">
      <div className="bg-[#f0ede6] min-h-screen py-[120px] px-6">
        {/* Outer wrapper - max-w-[1660px] */}
        <div className="max-w-[1600px] mx-auto flex flex-col gap-10">
          {/* Top Section */}
          <div className="flex gap-10 items-start">
            {/* Headline - max-w-[391px] */}
            <div className="max-w-[391px] w-full shrink-0">
              <h1 className="text-[43px] font-bold leading-[58px] underline text-primary">
                Reach out for inquiries, collaborations, or just to say hello.
                We're eager to connect!
              </h1>
            </div>

            {/* Form Card - max-w-[1067px] */}
            <div className="max-w-[1067px] w-full bg-white rounded-2xl p-15">
              <div className="grid grid-cols-2 gap-7.5 mb-7.5">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="bg-[#F5F5F5] rounded-md px-6.25 py-5 text-base text-tarnary outline-none placeholder:text-gray-400 w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="bg-[#F5F5F5] rounded-md px-6.25 py-5 text-base text-tarnary outline-none placeholder:text-gray-400 w-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-7.5 mb-7.5">
                <input
                  type="email"
                  placeholder="Your Email ID"
                  className="bg-[#F5F5F5] rounded-md px-6.25 py-5 text-base text-tarnary outline-none placeholder:text-gray-400 w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-[#F5F5F5] rounded-md px-6.25 py-5 text-base text-tarnary outline-none placeholder:text-gray-400 w-full"
                />
              </div>

              <textarea
                placeholder="Write your message"
                rows={5}
                className="bg-[#F5F5F5] rounded-md px-6.25 py-5 text-base text-tarnary outline-none placeholder:text-gray-400 w-full resize-none mb-7.5"
              />

              <div className="flex justify-center">
                <button className="bg-[#e85d1e] hover:bg-[#d05018] text-white rounded-full px-7.5 py-5 text-sm font-medium transition-colors">
                  Submit message ►
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-start gap-8">
            {/* Logo */}
            <div className="shrink-0">
              <Image
                src={contact_logo}
                alt="Bitox Logo"
                className="w-[140px]"
              />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-3 gap-4 flex-1">
              <div className="bg-white rounded-xl p-5">
                <h3 className="text-sm font-semibold text-[#111] mb-2">
                  Address
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Valentin, Street Road 24, New York, USA – 67452
                </p>
              </div>
              <div className="bg-white rounded-xl p-5">
                <h3 className="text-sm font-semibold text-[#111] mb-2">
                  Phone / Message
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  supportadmin@example.com
                  <br />
                  (255) 864-6308
                </p>
              </div>
              <div className="bg-white rounded-xl p-5">
                <h3 className="text-sm font-semibold text-[#111] mb-2">
                  Working Hours
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Monday to Friday 09:00 to 18:30
                  <br />
                  Saturday 15:30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full max-w-[1600px] h-[690px] rounded-md overflow-hidden mx-auto mb-30">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036955468959!2d90.36556226218187!3d23.747049949764218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1777483156468!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactForm;

"use client";
import contact_bg from "../../../public/images/contact/contact-bg.png";
import contact_logo from "../../../public/images/contact/contact_logo.png";
import { useState } from "react";
import Button from "./Button";
import Image from "next/image";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${contact_bg.src})`,
        }}
      >
        <div className="w-[1583px] mx-auto my-30">
          <div className="flex justify-between">
            <div className="">
              <h2 className=" w-103.75  text-[50px] leading-14.5 font-bold text-primary underline mb-[305px]">
                Reach out for inquiries, collaborations, or just to say
                hello.We&apos;re eager to connect!
              </h2>
              <Image width={391} height={117} alt="Bitox" src={contact_logo} />
            </div>
            <div>
              <form className="bg-white py-15 px-15 rounded-[15px] mb-7.5">
                <div className="flex flex-col gap-7.5 ">
                  <div className="flex gap-[30px] ">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name*"
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-[458px] h-[60px] py-5 px-6.25 bg-[#F5F5F5] rounded-md border-none outline-none text-md font-regular text-tarnary r"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name*"
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-[458px] h-[60px] py-5 px-6.25 bg-[#F5F5F5] rounded-md border-none outline-none text-md font-regular text-tarnary "
                    />
                  </div>

                  <div className="flex gap-[30px] ">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email ID"
                      value={form.email}
                      onChange={handleChange}
                      className="w-[458px] py-5 px-6.25 bg-[#F5F5F5] rounded-md border-none outline-none text-md font-regular text-tarnary "
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-[458px] h-[60px] py-5 px-6.25 bg-[#F5F5F5] rounded-md border-none outline-none text-md font-regular text-tarnary "
                    />
                  </div>

                  <textarea
                    name="message"
                    placeholder="Write your message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-[946px] h-[176px] py-5  px-6.25 bg-[#F5F5F5] rounded-md border-none outline-none text-md font-regular text-tarnary"
                  />

                  <div className="flex justify-center">
                    <Button
                      label="Submit message"
                      bgColor="#f97316"
                      textColor="#ffffff"
                      showIcon={true}
                    />
                  </div>
                </div>
              </form>
              <div className="flex gap-[30px]">
                {/* Address */}
                <div className="w-[335px] p-[35px] bg-white rounded-md">
                  <h4 className="font-bold text-base text-[#02090F] mb-3">
                    Address
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Valentin, Street Road 24, New York, USA – 67452
                  </p>
                </div>

                {/* Phone / Message */}
                <div className="w-[335px] p-[35px] bg-white rounded-md">
                  <h4 className="font-bold text-base text-[#02090F] mb-3">
                    Phone / Message
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-500">
                    supportdomin@example.com
                  </p>
                  <p className="text-sm leading-relaxed text-gray-500">
                    (251) 854-6308
                  </p>
                </div>

                {/* Working Hours */}
                <div className="w-[335px] p-[35px] bg-white rounded-md">
                  <h4 className="font-bold text-base text-[#02090F] mb-3">
                    Working Hours
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Monday to Friday 09:00 to 18:30
                  </p>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Saturday 15:30
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="mx-auto w-400 h-[690px] bg-amber-300 mb-30">
          {/* <GoogleMapsEmbed
      apiKey="YOUR_API_KEY"
      height={400}
      width="100%"
      mode="place"
      q="Brooklyn+Bridge,New+York,NY"
    /> */}
        </div>
      </div>
    </>
  );
};

export default ContactForm;

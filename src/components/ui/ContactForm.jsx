"use client";
import contact_bg from "../../../public/images/contact/contact-bg.png";
import { useState } from "react";
import Button from "./Button";

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
            <h2 className=" w-103.75  text-[50px] leading-14.5 font-bold text-primary underline">
              Reach out for inquiries, collaborations, or just to say
              hello.We're eager to connect!
            </h2>
            <div>
              <form className="bg-white py-8 px-8 rounded-[15px]">
                <div className="flex gap-[30px] mb-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-[458px] h-[60px] px-4 bg-gray-100 rounded-[10px] border-none outline-none text-[15px] text-gray-500 box-border"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-[458px] h-[60px] px-4 bg-gray-100 rounded-[10px] border-none outline-none text-[15px] text-gray-500 box-border"
                  />
                </div>

                <div className="flex gap-[30px] mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email ID"
                    value={form.email}
                    onChange={handleChange}
                    className="w-[458px] h-[60px] px-4 bg-gray-100 rounded-[10px] border-none outline-none text-[15px] text-gray-500 box-border"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-[458px] h-[60px] px-4 bg-gray-100 rounded-[10px] border-none outline-none text-[15px] text-gray-500 box-border"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Write your message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-[946px] h-[176px] p-4 mb-6 bg-gray-100 rounded-[10px] border-none outline-none text-[15px] text-gray-500 resize-none box-border block"
                />

                <div className="flex justify-center">
                  <Button
                    label="Submit message"
                    bgColor="#f97316"
                    textColor="#ffffff"
                    showIcon={true}
                  />
                </div>
              </form>
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

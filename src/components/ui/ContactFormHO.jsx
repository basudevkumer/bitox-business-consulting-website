"use client";
import { useState } from "react";
import ButtonThree from "./ButtonThree";

// ─── Regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ─── Validate
function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = "Please enter a valid email.";
  }
  if (!values.message.trim()) errors.message = "Message cannot be empty.";
  return errors;
}

// ─── Field Error
const FieldError = ({ message }) =>
  message ? (
    <p className="mt-1 text-xs text-red-500 font-medium">{message}</p>
  ) : null;

const ContactFormHO = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...values, [name]: value };
    setValues(updated);
    if (touched[name]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(values);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const newErrors = validate(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const inputClass = (field) =>
    [
      "w-full px-5 py-[15px] rounded-[6px] text-sm text-color-primary placeholder:text-color-tarnary outline-none transition-colors duration-200 bg-transparent border",
      touched[field] && errors[field]
        ? "border-red-400 bg-red-50"
        : "border-[#0000001b] focus:border-color-primary",
    ].join(" ");

  if (submitted) {
    return (
      <div className="lg:h-[620px] w-full lg:max-w-[478px] bg-bg-secondaryTwo rounded-[6px] p-[35px] flex flex-col items-center justify-center gap-4">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-7 h-7 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="headingFour font-bold text-primary text-center">
          Message Sent!
        </h2>
        <p className="para-lg text-tarnary text-center">
          Thank you for reaching out. We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="lg:h-[620px] w-full lg:max-w-[478px] bg-bg-secondaryTwo rounded-[6px] p-[30px] flex flex-col gap-[48px]">
      <div className="flex flex-col gap-[25px]">
        <h2 className="headingFour font-bold text-primary">
          Start your project with bitox growth partners
        </h2>
        <p className="para-lg font-normal text-tarnary">
          Regular updates ensure that readers have access to fresh perspectives,
          making Poster a must-read.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-x-[14px] gap-y-[10px]"
      >
        {/* Row: Name + Email */}
        <div className="flex items-start gap-[14px]">
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass("name")}
            />
            <FieldError message={touched.name ? errors.name : undefined} />
          </div>
          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={inputClass("email")}
            />
            <FieldError message={touched.email ? errors.email : undefined} />
          </div>
        </div>

        {/* Textarea */}
        <div>
          <textarea
            name="message"
            placeholder="Write your message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={[
              "h-[118px] mb-1 resize-none",
              inputClass("message"),
            ].join(" ")}
          />
          <FieldError message={touched.message ? errors.message : undefined} />
        </div>

        <ButtonThree frontText={"Send message"} type="submit" />
      </form>
    </div>
  );
};

export default ContactFormHO;

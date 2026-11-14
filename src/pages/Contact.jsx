import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { portfolioData as data } from "../data";

const EMAILJS_SERVICE_ID = "service_jeiwi3x";
const EMAILJS_TEMPLATE_ID = "template_d5fu38e";
const EMAILJS_PUBLIC_KEY = "3g6JOAoH4lxlKgZMp";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      formRef.current.reset();
      setStatus("success");
    } catch (err) {
      console.error("Error:", err);
      alert("There was a problem sending your message.");
      setStatus("idle");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-8 md:py-12 border-t border-[#ffffff10]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm md:text-lg text-[var(--sec)] mb-1 shiny-sec">
          Let's talk
        </h2>
        <h3 className="text-3xl md:text-4xl font-medium text-[var(--white)] mb-4 md:mb-6">
          Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <div className="text-[var(--white-icon)] text-sm md:text-base space-y-2">
            <p className="mb-3">{data.contact.subtitle}</p>
            <div className="flex items-center gap-2">
              <span>Location:</span>
              <span className="text-[var(--white)]">{data.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Email:</span>
              <a
                href={`mailto:${data.contact.email_address}`}
                className="text-[var(--white)] hover:text-[var(--sec)] transition-colors"
              >
                {data.contact.email_address}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>Phone:</span>
              <a
                href={`tel:${data.contact.number}`}
                className="text-[var(--white)] hover:text-[var(--sec)] transition-colors"
              >
                {data.contact.number}
              </a>
            </div>
          </div>

          <div>
            {status !== "success" && (
              <form
                id="contact-form"
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3"
              >
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  required
                  className="px-3.5 py-2 text-sm md:text-base bg-[#1414149c] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sec)]"
                />
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Email"
                  required
                  className="px-3.5 py-2 text-sm md:text-base bg-[#1414149c] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sec)]"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required
                  className="px-3.5 py-2 text-sm md:text-base bg-[#1414149c] text-[var(--white)] border border-[var(--white-icon-tr)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--sec)] resize-none"
                ></textarea>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-4 py-2 text-sm md:text-base bg-[var(--white-icon-tr)] text-[var(--white)] rounded-lg opacity-60 transition-opacity border border-[var(--white-icon-tr)] hover:opacity-100 hover:bg-[var(--white-icon-tr)]"
                >
                  Submit
                </button>
              </form>
            )}
            <div
              id="form-message"
              className={`${
                status === "success" ? "flex" : "hidden"
              } justify-center items-center mt-4 text-[var(--white)] text-base md:text-lg`}
            >
              ✅ Thank you for your message!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

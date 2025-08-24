import React, { useState } from "react";
import { BackgroundBeams } from "./background-beams.jsx";
import { Input } from "./input.jsx";

export function BackgroundBeamsDemo() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("Email changed:", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with email:", email);
    alert(`Email submitted: ${email}`);
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 relative z-20">
        <h1 className="relative z-20 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-orange-200 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-white max-w-lg mx-auto my-2 text-lg text-center relative z-20">
          Welcome to MailJet, the best transactional email service on the web.
          We provide reliable, scalable, and customizable email solutions for
          your business. Whether you&apos;re sending order confirmations,
          password reset emails, or promotional campaigns, MailJet has got you
          covered.
        </p>
        
        <form onSubmit={handleSubmit} className="relative z-20">
          <Input
            type="email"
            placeholder="hi@manuarora.in"
            value={email}
            onChange={handleEmailChange}
            className="w-full mt-4 relative z-20"
          />
          <button
            type="submit"
            className="mt-4 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Submit
          </button>
        </form>
        
        {/* Debug info - remove this later */}
        <div className="mt-4 text-center text-white text-sm">
          <p>Debug: Email value: "{email}"</p>
        </div>
      </div>
      <BackgroundBeams className="z-10" />
    </div>
  );
}

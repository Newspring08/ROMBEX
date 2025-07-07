"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send `email` to backend or service like Mailchimp
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <h3 className="text-sm font-medium text-gray-100 mb-4 text-start">
        Stay in the loop with our latest updates
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-3"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full flex-1 px-4 py-2 rounded-md text-gray-800 text-sm bg-white  focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-6 py-2 w-full lg:w-32 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>
      {submitted && (
        <p className="mt-4 text-xs text-green-400 ltext-start">
          ✅ Thanks for subscribing!
        </p>
      )}
    </div>
  );
}

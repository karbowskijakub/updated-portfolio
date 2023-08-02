"use client";

import { useState } from "react";
import { toast } from 'react-toastify';

export default function ContactForm() {
	const notify = () => toast.success("Wiadomość wysłana pomyślnie.");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Message sent successfully");
        setLoading(false);
notify()
        // reset the form
        event.target.name.value = "";
        event.target.email.value = "";
        event.target.message.value = "";
      } else {
        console.log("Error sending message");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setLoading(false);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="lg:mr-40">
      <div className="w-full flex flex-col my-4">
        <label className="font-bold text-gray-800" htmlFor="name">
          Imię
        </label>
        <input
          type="text"
          minLength={3}
          maxLength={150}
          required
          className=" p-4 bg-gray-50 border border-gray-100 "
          autoComplete="off"
          id="name"
        />
      </div>
      <div className="w-full flex flex-col my-4">
        <label className="font-bold text-gray-800" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          minLength={5}
          maxLength={150}
          required
          className=" p-4 bg-gray-50 border border-gray-100 "
          autoComplete="off"
          id="email"
        />
      </div>
      <div>
        <label className="font-bold text-gray-800" htmlFor="message">
          Wiadomość
        </label>
        <textarea
          rows={4}
          required
          minLength={10}
          maxLength={500}
          name="message"
          className="w-full p-4 bg-gray-50 border border-gray-100 "
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className=" w-full text-ternary contact_button disabled:bg-gray-400 disabled:text-gray-100   mt-4"
      >
        Send Message
      </button>
    </form>
  );
}

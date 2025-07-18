import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";

type Props = {
  contact: {
    email: string;
    linkedIn: string;
    github: string;
  };
};

export default function Contact({ contact }: Props) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validaciones simples
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    // Email regex básico
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email.");
      return;
    }

    // Abrir mailto con datos del form
    const mailto = `mailto:${contact.email}?subject=Message from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message + "\n\nContact email: " + form.email)}`;

    window.location.href = mailto;
    setSuccess("Opening mail client...");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="glass-box max-w-3xl mx-auto p-8 rounded-xl">
      <h2 className="glow-text text-4xl font-semibold mb-8 text-center">Contact</h2>



<form
  name="contact"
  method="POST"
  data-netlify="true"
  className="flex flex-col gap-6"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="p-3 rounded-md bg-black text-white border border-gray-700 focus:border-purple-500 focus:outline-none placeholder-gray-400"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="p-3 rounded-md bg-black text-white border border-gray-700 focus:border-purple-500 focus:outline-none placeholder-gray-400"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    rows={5}
    required
    className="p-3 rounded-md bg-black text-white border border-gray-700 focus:border-purple-500 focus:outline-none placeholder-gray-400 resize-none"
  />
  <button
    type="submit"
    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md transition"
  >
    Send Message
  </button>
</form>
<ul className="flex justify-center list-none p-0 m-0 items-center gap-x-10">
  <li>
    <a
      href={contact.linkedIn}
      target="_blank"
      rel="noreferrer"
      className="inline-block text-purple-400 hover:scale-110 transition-transform"
      aria-label="LinkedIn"
    >
      <Linkedin size={36} />
    </a>
  </li>
  <li>
    <a
      href={contact.github}
      target="_blank"
      rel="noreferrer"
      className="inline-block text-purple-400 hover:scale-110 transition-transform"
      aria-label="GitHub"
    >
      <Github size={36} />
    </a>
  </li>
</ul>


<div className="bg-red-500 h-4 w-full"></div>
    </section>
  );
}

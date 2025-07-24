import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('http://localhost:5001/api/contact', form);
      setStatus('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Failed to send. Please try again.');
    }
  };
  return (
    <section id="contact" className="w-full flex justify-center items-center py-24 bg-white dark:bg-black transition-colors duration-500">
      <motion.form
        className="max-w-lg w-full flex flex-col gap-6 px-6 py-12 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">Contact</h2>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          className="rounded-md px-5 py-3 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 focus:border-blue-400 focus:ring-blue-400 outline-none text-lg"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Your Email"
          className="rounded-md px-5 py-3 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 focus:border-blue-400 focus:ring-blue-400 outline-none text-lg"
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Your Message"
          rows={5}
          className="rounded-md px-5 py-3 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-700 focus:border-blue-400 focus:ring-blue-400 outline-none text-lg"
        />
        <button
          type="submit"
          className="px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-lg shadow hover:scale-105 transition-all duration-200 border border-transparent hover:border-gray-300 dark:hover:border-slate-700"
        >
          Send Message
        </button>
        {status && <div className="text-green-500 font-medium text-center">{status}</div>}
      </motion.form>
    </section>
  );
} 
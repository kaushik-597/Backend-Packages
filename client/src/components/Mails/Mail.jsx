import { useState } from "react";

function Mail() {
  const [form, setForm] = useState({ to: "", subject: "", text: "" });
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-slate-800 text-center">
          Send Mail
        </h2>

        <input
          type="email"
          name="to"
          placeholder="Enter email"
          value={form.to}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <textarea
          name="text"
          placeholder="Message"
          value={form.text}
          onChange={handleChange}
          rows="5"
          className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-[0.98] transition"
        >
          Send Mail
        </button>
      </form>
    </>
  );
}

export default Mail;

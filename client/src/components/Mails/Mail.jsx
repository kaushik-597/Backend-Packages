import { useState } from "react";

function Mail() {
  const [form, setForm] = useState({
    to: "",
    subject: "",
    text: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({
      to: "",
      subject: "",
      text: "",
    });
  };

  return (
    // Background: Using a warm Stone-50 base with a soft Peach/Rose gradient
    <div className="min-h-screen w-full bg-stone-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Soft Decorative Blobs */}
      <div className="absolute top-[-5%] right-[-5%] w-[50%] h-[50%] rounded-full bg-orange-100/50 blur-[100px]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[50%] h-[50%] rounded-full bg-rose-100/50 blur-[100px]" />

      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md border border-stone-200 rounded-3xl shadow-xl shadow-stone-200/50 relative z-10 overflow-hidden">
        {/* Header: Warm and welcoming */}
        <div className="px-10 py-8 border-b border-stone-100 bg-white/50">
          <h2 className="text-3xl font-bold text-stone-800 tracking-tight">
            Compose Message
          </h2>
          <p className="text-stone-500 mt-2 font-medium">
            Send a thoughtful note to someone special.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-7">
          {/* Recipient Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-600 ml-1 italic">
              Recipient
            </label>
            <input
              type="email"
              name="to"
              placeholder="hello@example.com"
              value={form.to}
              onChange={handleChange}
              className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-5 py-4 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-300 transition-all shadow-sm"
            />
          </div>

          {/* Subject Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-600 ml-1 italic">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="What's on your mind?"
              value={form.subject}
              onChange={handleChange}
              className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-5 py-4 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-300 transition-all shadow-sm"
            />
          </div>

          {/* Message Body */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-stone-600 ml-1 italic">
              Your Message
            </label>
            <textarea
              name="text"
              rows="6"
              placeholder="Type your message here..."
              value={form.text}
              onChange={handleChange}
              className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-5 py-4 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-4 focus:ring-orange-100 focus:border-orange-300 transition-all shadow-sm resize-none"
            ></textarea>
          </div>

          {/* Submit Button: Warm Orange/Amber Gradient */}
          <div className="flex items-center justify-end pt-2">
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-400 to-rose-400 hover:from-orange-500 hover:to-rose-500 text-white font-bold px-10 py-4 rounded-2xl shadow-lg shadow-orange-200 transform transition-all hover:-translate-y-1 active:scale-95 cursor-pointer"
            >
              Send Mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Mail;

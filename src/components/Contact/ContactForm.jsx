import { memo, useEffect } from "react";
import { Send } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";

export const ContactForm = memo(() => {
  const {
    formData,
    loading,
    messageStatus,
    handleSubmit,
    handleChange,
    resetStatus,
  } = useContactForm();

  useEffect(() => {
    if (messageStatus) {
      const timer = setTimeout(resetStatus, 3000);
      return () => clearTimeout(timer);
    }
  }, [messageStatus, resetStatus]);

  return (
    <div
      className="relative p-8 rounded-xl bg-[#0A0A0A]/70 backdrop-blur-sm border border-[#77001A]/20"
      data-aos="fade-right"
      data-aos-delay="300">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#330008] to-[#77001A] rounded-xl blur opacity-20"></div>
      <form onSubmit={handleSubmit} className="relative space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#77001A] focus:ring-1 focus:ring-[#77001A] transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#77001A] focus:ring-1 focus:ring-[#77001A] transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#77001A] focus:ring-1 focus:ring-[#77001A] transition-colors resize-none"
            placeholder="Your message..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#77001A] to-[#AA0020] text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
        {messageStatus === "success" && (
          <div className="p-3 mt-4 text-green-400 rounded-lg bg-green-500/20">
            ✅ Message sent successfully!
          </div>
        )}
        {messageStatus === "error" && (
          <div className="p-3 mt-4 text-red-400 rounded-lg bg-red-500/20">
            ❌ Error sending message. Please try again.
          </div>
        )}
      </form>
    </div>
  );
});

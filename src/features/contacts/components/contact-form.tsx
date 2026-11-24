
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <div className="bg-white p-6 md:p-8">
      <h3 className="text-xl font-medium text-gray-900">
        Get In touch
      </h3>

      <p className="mt-2 text-xs text-gray-400">
        Feel free contact with us, we love to make new partners & friends
      </p>

      <form className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-2 block text-xs text-gray-700">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First name..."
              className="w-full border border-gray-200 px-3 py-2 text-xs outline-none transition focus:border-orange-400"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="mb-2 block text-xs text-gray-700">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last name..."
              className="w-full border border-gray-200 px-3 py-2 text-xs outline-none transition focus:border-orange-400"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-xs text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-200 px-3 py-2 text-xs outline-none transition focus:border-orange-400"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-xs text-gray-700">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Message Subject"
            className="w-full border border-gray-200 px-3 py-2 text-xs outline-none transition focus:border-orange-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-xs text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Write your message..."
            className="w-full resize-none border border-gray-200 px-3 py-3 text-xs outline-none transition focus:border-orange-400"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-orange-400 px-5 py-3 text-xs font-semibold text-white transition hover:bg-orange-500"
        >
          Send Message
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}

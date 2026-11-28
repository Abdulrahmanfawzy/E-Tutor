
import { Send } from "lucide-react";

export function FaqForm() {
  return (
    <aside className="bg-gray-50 p-4">
      <h2 className="text-xs font-semibold text-gray-900">
        Don’t find your answer?
      </h2>

      <p className="mt-2 text-[10px] leading-4 text-gray-500">
        Don’t worry, write your question here and our support team will help you.
      </p>

      <form
        className="mt-4 space-y-2"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full border border-gray-100 bg-white px-3 py-2.5 text-xs outline-none transition placeholder:text-gray-400 focus:border-orange-400"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
          className="w-full resize-none border border-gray-100 bg-white px-3 py-3 text-xs outline-none transition placeholder:text-gray-400 focus:border-orange-400"
        />

        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-orange-400 px-3 py-2.5 text-xs font-medium text-white transition hover:bg-orange-500"
        >
          Submit Question
          <Send size={13} />
        </button>
      </form>
    </aside>
  );
}

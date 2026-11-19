export default function InstructorFooter() {
  return (
    <footer className="flex flex-col gap-3 border-t border-gray-100 bg-white px-8 py-4 text-label-sm text-gray-600 md:flex-row md:items-center md:justify-between">
      <p>
        © 2021 - Eduguard. Designed by{" "}
        <span className="font-semibold text-gray-900">Templatecookie</span>.
        All rights reserved
      </p>

      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-gray-900">FAQs</a>
        <a href="#" className="hover:text-gray-900">Privacy Policy</a>
        <a href="#" className="hover:text-gray-900">Terms & Condition</a>
      </div>
    </footer>
  );
}
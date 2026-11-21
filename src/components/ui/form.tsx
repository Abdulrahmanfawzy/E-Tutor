import { InputHTMLAttributes, ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`bg-white p-6 ${className}`}>{children}</section>;
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h2 className="mb-5 text-lg font-semibold text-[#1D2026]">{children}</h2>;
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-xs text-[#1D2026]">
        {label}
        {hint && <span className="text-[#8C94A3]">{hint}</span>}
      </span>
      {children}
    </label>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode; // icon on the left
  trailing?: ReactNode; // element on the right (e.g. eye button)
};

export function TextInput({ icon, trailing, className = "", ...props }: InputProps) {
  return (
    <div className="flex h-11 items-center gap-3 border border-[#E9EAF0] bg-white px-4 focus-within:border-[#FF6636]">
      {icon && <span className="shrink-0 text-[#FF6636]">{icon}</span>}
      <input
        {...props}
        className={`w-full bg-transparent text-sm text-[#1D2026] outline-none placeholder:text-[#8C94A3] ${className}`}
      />
      {trailing}
    </div>
  );
}

export function SaveButton({ children = "Save Changes" }: { children?: ReactNode }) {
  return (
    <button
      type="submit"
      className="h-10 bg-[#FF6636] px-6 text-sm font-semibold text-white transition hover:bg-[#e85a2c]"
    >
      {children}
    </button>
  );
}

import { Field, FieldError, FieldLabel } from "@/components/ui/field";


export function RegisterField({
  children,
  error,
  htmlFor,
  label,
}: RegisterPasswordFieldProps) {
  return (
    <Field data-invalid={Boolean(error)} className="min-w-0 gap-1">
      <FieldLabel
        htmlFor={htmlFor}
        className="text-[10px] font-normal leading-none text-gray-800"
      >
        {label}
      </FieldLabel>
      {children}
      {error ? (
        <FieldError className="text-[10px] leading-tight">
          {error}
        </FieldError>
      ) : null}
    </Field>
  );
}

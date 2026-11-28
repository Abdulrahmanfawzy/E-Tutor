"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Card, CardTitle, Field, TextInput, SaveButton } from "@/components/ui/form";
import { ApiError, changePassword } from "./settings/profile";

function PasswordField({
  label,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Field label={label}>
        <TextInput
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          trailing={
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="text-[#6E7485]"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          }
        />
      </Field>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

const empty = { current_password: "", password: "", password_confirmation: "" };

export default function ChangePassword() {
  const [form, setForm] = useState(empty);
  const [saving, setSaving] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const set = (key: keyof typeof empty) => (v: string) => {
    setForm((f) => ({ ...f, [key]: v }));
    setFieldErrors((e) => ({ ...e, [key]: "" }));
    setMessage(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    // quick client-side checks
    const errs: Record<string, string> = {};
    if (!form.current_password) errs.current_password = "Enter your current password.";
    if (!form.password) errs.password = "Enter a new password.";
    if (form.password !== form.password_confirmation) {
      errs.password_confirmation = "Passwords do not match.";
    }
    if (Object.keys(errs).length) {
      setFieldErrors(errs);
      return;
    }

    setSaving(true);
    setFieldErrors({});
    try {
      await changePassword(form);
      setForm(empty);
      setMessage({ type: "success", text: "Password changed successfully." });
    } catch (err) {
      if (err instanceof ApiError && err.errors) {
        // keep the first message for each field, e.g. current_password
        const mapped: Record<string, string> = {};
        Object.entries(err.errors).forEach(([k, v]) => (mapped[k] = v[0]));
        setFieldErrors(mapped);
      } else {
        setMessage({ type: "error", text: (err as Error).message });
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <Card className="h-full">
      <CardTitle>Change password</CardTitle>
      <form onSubmit={onSubmit} className="space-y-4">
        <PasswordField
          label="Current Password"
          placeholder="Password"
          value={form.current_password}
          onChange={set("current_password")}
          error={fieldErrors.current_password}
        />
        <PasswordField
          label="New Password"
          placeholder="Password"
          value={form.password}
          onChange={set("password")}
          error={fieldErrors.password}
        />
        <PasswordField
          label="Confirm Password"
          placeholder="Confirm new password"
          value={form.password_confirmation}
          onChange={set("password_confirmation")}
          error={fieldErrors.password_confirmation}
        />

        {message && (
          <p className={`text-xs ${message.type === "error" ? "text-red-500" : "text-green-600"}`}>
            {message.text}
          </p>
        )}

        <SaveButton disabled={saving}>{saving ? "Saving..." : "Save Changes"}</SaveButton>
      </form>
    </Card>
  );
}
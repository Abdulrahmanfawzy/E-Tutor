"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Card, CardTitle, Field, TextInput, SaveButton } from "@/components/ui/form";

function PasswordField({ label, placeholder }: { label: string; placeholder: string }) {
  const [show, setShow] = useState(false);
  return (
    <Field label={label}>
      <TextInput
        type={show ? "text" : "password"}
        placeholder={placeholder}
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
  );
}

export default function ChangePassword() {
  return (
    <Card className="h-full">
      <CardTitle>Change password</CardTitle>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <PasswordField label="Current Password" placeholder="Password" />
        <PasswordField label="New Password" placeholder="Password" />
        <PasswordField label="Confirm Password" placeholder="Confirm new password" />
        <SaveButton>Save Changes</SaveButton>
      </form>
    </Card>
  );
}
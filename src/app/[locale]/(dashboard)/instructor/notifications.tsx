"use client";

import { useState } from "react";
import { Card, CardTitle, SaveButton } from "@/components/ui/form";

const options = [
  { label: "I want to know who buy my course.", checked: false },
  { label: "I want to know who write a review on my courses.", checked: true },
  { label: "I want to know who commented on my lecture.", checked: false },
  { label: "I want to know who download my lecture notes.", checked: true },
  { label: "I want to know who replied on my comment.", checked: true },
  { label: "I want to know daily how many people visited my profile.", checked: false },
  { label: "I want to know who download my lecture attach file.", checked: true },
];

export default function Notifications() {
  const [values, setValues] = useState(options.map((o) => o.checked));

  const toggle = (i: number) =>
    setValues((v) => v.map((x, idx) => (idx === i ? !x : x)));

  return (
    <Card className="h-full">
      <CardTitle>Notifications</CardTitle>
      <form onSubmit={(e) => e.preventDefault()}>
        <ul className="mb-6 space-y-3">
          {options.map((o, i) => (
            <li key={o.label}>
              <label className="flex cursor-pointer items-center gap-3 text-xs text-[#4E5566]">
                <input
                  type="checkbox"
                  checked={values[i]}
                  onChange={() => toggle(i)}
                  className="h-4 w-4 accent-[#FF6636]"
                />
                {o.label}
              </label>
            </li>
          ))}
        </ul>
        <SaveButton />
      </form>
    </Card>
  );
}

import { Mail, MapPin, Phone } from "lucide-react";
import type { ContactInfo as ContactInfoType } from "../types/contacts.types";

interface ContactInfoProps {
  data: ContactInfoType;
}

export function ContactInfo({ data }: ContactInfoProps) {
  return (
    <div>
      <p className="max-w-sm text-base leading-6 text-gray-800">
        {data.description}
      </p>

      <div className="mt-7 space-y-5">
        <div className="grid grid-cols-[100px_1fr] gap-3 border-b border-gray-200 pb-5">
          <span className="text-xs font-medium uppercase text-orange-400">
            Address
          </span>

          <div className="flex gap-2 text-xs leading-5 text-gray-600">
            <MapPin size={15} className="mt-0.5 shrink-0" />
            <div>
              {data.address.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[100px_1fr] gap-3 border-b border-gray-200 pb-5">
          <span className="text-xs font-medium uppercase text-orange-400">
            Phone Number
          </span>

          <div className="space-y-1 text-xs text-gray-600">
            {data.phoneNumbers.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="flex items-center gap-2 hover:text-orange-400"
              >
                <Phone size={14} />
                {phone}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[100px_1fr] gap-3">
          <span className="text-xs font-medium uppercase text-orange-400">
            Email Address
          </span>

          <div className="space-y-1 text-xs text-gray-600">
            {data.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="flex items-center gap-2 hover:text-orange-400"
              >
                <Mail size={14} />
                {email}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatAvatarProps {
  name: string;
  avatar?: string;
  initials: string;
  online?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "size-7",
  md: "size-12",
  lg: "size-16",
};

export function ChatAvatar({
  name,
  avatar,
  initials,
  online = false,
  size = "md",
}: ChatAvatarProps) {
  return (
    <div className={`relative shrink-0 ${sizes[size]}`}>
      <Avatar className="size-full">
        {avatar && <AvatarImage src={avatar} alt={name} />}

        <AvatarFallback className="bg-orange-100 text-sm font-semibold text-orange-600">
          {initials}
        </AvatarFallback>
      </Avatar>

      {online && (
        <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-white bg-green-400" />
      )}
    </div>
  );
}

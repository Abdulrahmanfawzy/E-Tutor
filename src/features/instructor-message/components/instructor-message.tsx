// "use client";

// import Image from "next/image";
// import { useEffect, useRef, useState } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   ArrowLeft,
//   Ellipsis,
//   Paperclip,
//   Plus,
//   Search,
//   Send,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";

// import {
//   conversations as initialConversations,
//   initialMessages,
//   type ChatMessage,
//   type Conversation,
// } from "../data/mock-data";

// import { messageSchema, type MessageFormValues } from "../schema/message.schema";

// type MobileView = "list" | "chat";

// interface ChatAvatarProps {
//   conversation: Conversation;
//   size?: "sm" | "md" | "lg";
// }

// function ChatAvatar({ conversation, size = "md" }: ChatAvatarProps) {
//   const sizes = {
//     sm: "size-7",
//     md: "size-12",
//     lg: "size-16",
//   };

//   return (
//     <div className={`relative shrink-0 ${sizes[size]}`}>
//       <div className="flex size-full items-center justify-center overflow-hidden rounded-full bg-orange-100 text-sm font-semibold text-orange-600">
//         {conversation.initials}
//       </div>

//       {conversation.avatar && (
//         <Image
//           src={conversation.avatar}
//           alt={conversation.name}
//           fill
//           unoptimized
//           sizes="64px"
//           className="rounded-full object-cover"
//         />
//       )}

//       {conversation.online && (
//         <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-white bg-green-400" />
//       )}
//     </div>
//   );
// }

// interface ConversationItemProps {
//   conversation: Conversation;
//   selected: boolean;
//   onClick: () => void;
// }

// function ConversationItem({
//   conversation,
//   selected,
//   onClick,
// }: ConversationItemProps) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={`flex w-full items-center gap-4 px-6 py-3 text-left transition-colors hover:bg-gray-50 ${
//         selected ? "bg-orange-100 hover:bg-orange-100" : ""
//       }`}
//     >
//       <ChatAvatar conversation={conversation} />

//       <div className="min-w-0 flex-1">
//         <div className="mb-1 flex items-center justify-between gap-2">
//           <h3 className="truncate text-sm font-medium text-gray-900">
//             {conversation.name}
//           </h3>

//           <span className="shrink-0 text-xs text-gray-500">
//             {conversation.time}
//           </span>
//         </div>

//         <p className="truncate text-sm text-gray-500">{conversation.preview}</p>
//       </div>

//       {conversation.unread && (
//         <span
//           className="size-2 shrink-0 rounded-full bg-orange-400"
//           aria-label="Unread messages"
//         />
//       )}
//     </button>
//   );
// }

// interface MessageBubbleProps {
//   message: ChatMessage;
//   conversation: Conversation;
// }

// function MessageBubble({ message, conversation }: MessageBubbleProps) {
//   const isMine = message.sender === "me";

//   if (isMine) {
//     return (
//       <div className="flex flex-col items-end gap-2">
//         <span className="text-xs text-gray-500">{message.time}</span>

//         <div className="max-w-[85%] rounded-tl-lg rounded-tr-lg rounded-bl-lg bg-orange-400 px-4 py-3 text-sm leading-relaxed text-white sm:max-w-[75%]">
//           <p className="whitespace-pre-wrap break-words">{message.text}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex items-end gap-2">
//       <ChatAvatar conversation={conversation} size="sm" />

//       <div className="flex max-w-[85%] flex-col gap-2 sm:max-w-[70%]">
//         <span className="text-xs text-gray-500">{message.time}</span>

//         <div className="rounded-tl-lg rounded-tr-lg rounded-br-lg bg-orange-50 px-3 py-2.5 text-sm leading-relaxed text-gray-900">
//           <p className="whitespace-pre-wrap break-words">{message.text}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// interface ConversationSidebarProps {
//   conversations: Conversation[];
//   selectedId: string;
//   onSelect: (id: string) => void;
//   onCompose: () => void;
// }

// function ConversationSidebar({
//   conversations,
//   selectedId,
//   onSelect,
//   onCompose,
// }: ConversationSidebarProps) {
//   const [search, setSearch] = useState("");

//   const filteredConversations = conversations.filter((conversation) =>
//     conversation.name.toLowerCase().includes(search.toLowerCase()),
//   );

//   return (
//     <aside className="flex h-full w-full shrink-0 flex-col border-r border-gray-100 bg-white md:w-[424px]">
//       {/* Sidebar header */}
//       <div className="flex h-20 shrink-0 items-center justify-between px-6">
//         <h1 className="text-xl font-semibold text-gray-900">Chat</h1>

//         <Button variant="secondary-soft" size="sm" onClick={onCompose}>
//           <Plus className="size-4" />
//           Compose
//         </Button>
//       </div>

//       {/* Search */}
//       <div className="shrink-0 px-6 pb-4">
//         <div className="flex h-12 items-center gap-3 border border-gray-100 px-4 focus-within:border-orange-400">
//           <Search className="size-5 shrink-0 text-gray-800" />

//           <input
//             type="search"
//             value={search}
//             onChange={(event) => setSearch(event.target.value)}
//             placeholder="Search"
//             aria-label="Search conversations"
//             className="h-full min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
//           />
//         </div>
//       </div>

//       {/* Conversations */}
//       <div className="flex-1 overflow-y-auto">
//         {filteredConversations.length > 0 ? (
//           filteredConversations.map((conversation) => (
//             <ConversationItem
//               key={conversation.id}
//               conversation={conversation}
//               selected={conversation.id === selectedId}
//               onClick={() => onSelect(conversation.id)}
//             />
//           ))
//         ) : (
//           <div className="px-6 py-10 text-center text-sm text-gray-500">
//             No conversations found.
//           </div>
//         )}
//       </div>
//     </aside>
//   );
// }

// interface ConversationHeaderProps {
//   conversation: Conversation;
//   onBack: () => void;
// }

// function ConversationHeader({ conversation, onBack }: ConversationHeaderProps) {
//   const [showInfo, setShowInfo] = useState(false);

//   return (
//     <header className="relative flex h-[104px] shrink-0 items-center justify-between border-b border-gray-100 px-5 md:px-12">
//       <div className="flex min-w-0 items-center gap-3">
//         <button
//           type="button"
//           onClick={onBack}
//           aria-label="Back to conversations"
//           className="mr-1 rounded-md p-2 text-gray-600 hover:bg-gray-50 md:hidden"
//         >
//           <ArrowLeft className="size-5" />
//         </button>

//         <ChatAvatar conversation={conversation} size="lg" />

//         <div className="min-w-0">
//           <h2 className="truncate text-lg font-medium text-gray-900">
//             {conversation.name}
//           </h2>

//           <p className="mt-1 text-sm text-gray-600">
//             {conversation.online ? "Active Now" : "Offline"}
//           </p>
//         </div>
//       </div>

//       <button
//         type="button"
//         onClick={() => setShowInfo((previous) => !previous)}
//         aria-label="Conversation options"
//         aria-expanded={showInfo}
//         className="flex size-12 shrink-0 items-center justify-center bg-gray-50 text-gray-900 transition-colors hover:bg-gray-100"
//       >
//         <Ellipsis className="size-6" />
//       </button>

//       {showInfo && (
//         <div className="absolute top-20 right-5 z-20 rounded-lg border border-gray-100 bg-white p-4 shadow-lg md:right-12">
//           <p className="text-sm font-semibold text-gray-900">
//             {conversation.name}
//           </p>
//           <p className="mt-1 text-xs text-gray-500">
//             {conversation.online ? "Currently online" : "Currently offline"}
//           </p>
//         </div>
//       )}
//     </header>
//   );
// }

// interface MessageScrollerProps {
//   messages: ChatMessage[];
//   conversation: Conversation;
// }

// function MessageScroller({ messages, conversation }: MessageScrollerProps) {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = scrollRef.current;

//     if (container) {
//       container.scrollTo({
//         top: container.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [messages]);

//   return (
//     <div
//       ref={scrollRef}
//       role="log"
//       aria-label="Conversation messages"
//       aria-live="polite"
//       className="flex flex-1 flex-col gap-7 overflow-y-auto px-5 py-7 md:px-12 md:py-10"
//     >
//       <div className="flex justify-center">
//         <span className="rounded-md bg-orange-50 px-4 py-2 text-sm text-gray-700">
//           Today
//         </span>
//       </div>

//       {messages.map((message) => (
//         <MessageBubble
//           key={message.id}
//           message={message}
//           conversation={conversation}
//         />
//       ))}

//       {messages.length === 0 && (
//         <div className="flex flex-1 items-center justify-center">
//           <p className="text-sm text-gray-500">
//             Start your conversation with {conversation.name}.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// interface MessageComposerProps {
//   onSend: (values: MessageFormValues, attachment: string) => void;
// }

// function MessageComposer({ onSend }: MessageComposerProps) {
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [attachment, setAttachment] = useState("");

//   const { control, handleSubmit, reset } = useForm<MessageFormValues>({
//     resolver: zodResolver(messageSchema),
//     defaultValues: {
//       message: "",
//     },
//   });

//   const submitMessage = (values: MessageFormValues) => {
//     onSend(values, attachment);
//     reset();
//     setAttachment("");

//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   return (
//     <footer className="shrink-0 border-t border-gray-100 bg-white px-5 py-5 md:px-12">
//       <form
//         onSubmit={handleSubmit(submitMessage)}
//         className="flex items-center gap-3"
//       >
//         <div className="flex h-12 min-w-0 flex-1 items-center border border-gray-100 px-4 focus-within:border-orange-400">
//           <button
//             type="button"
//             onClick={() => fileInputRef.current?.click()}
//             aria-label="Attach a file"
//             className="mr-3 shrink-0 text-orange-400 transition-colors hover:text-orange-600"
//           >
//             <Paperclip className="size-5" />
//           </button>

//           <Controller
//             name="message"
//             control={control}
//             render={({ field, fieldState }) => (
//               <>
//                 <input
//                   {...field}
//                   type="text"
//                   placeholder={
//                     attachment
//                       ? `Attachment: ${attachment}`
//                       : "Type your message"
//                   }
//                   autoComplete="off"
//                   aria-label="Type your message"
//                   aria-invalid={!!fieldState.error}
//                   className="h-full min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
//                 />

//                 {fieldState.error && (
//                   <span className="sr-only" role="alert">
//                     {fieldState.error.message}
//                   </span>
//                 )}
//               </>
//             )}
//           />

//           <input
//             ref={fileInputRef}
//             type="file"
//             className="hidden"
//             onChange={(event) => {
//               const file = event.target.files?.[0];
//               if (file) setAttachment(file.name);
//             }}
//           />
//         </div>

//         <Controller
//           name="message"
//           control={control}
//           render={({ field }) => (
//             <Button
//               type="submit"
//               variant="default"
//               size="lg"
//               disabled={!field.value.trim()}
//               className="h-12 shrink-0 px-5 sm:px-6"
//             >
//               <span className="hidden sm:inline">Send</span>
//               <Send className="size-5" />
//             </Button>
//           )}
//         />
//       </form>
//     </footer>
//   );
// }

// export default function InstructorMessage() {
//   const [conversations, setConversations] = useState(initialConversations);

//   const [selectedId, setSelectedId] = useState("jane");

//   const [messages, setMessages] =
//     useState<Record<string, ChatMessage[]>>(initialMessages);

//   const [mobileView, setMobileView] = useState<MobileView>("chat");

//   const selectedConversation =
//     conversations.find((conversation) => conversation.id === selectedId) ??
//     conversations[0];

//   const activeMessages = messages[selectedId] ?? [];

//   const handleSelectConversation = (id: string) => {
//     setSelectedId(id);
//     setMobileView("chat");

//     setConversations((previous) =>
//       previous.map((conversation) =>
//         conversation.id === id
//           ? { ...conversation, unread: false }
//           : conversation,
//       ),
//     );
//   };

//   const handleCompose = () => {
//     const existingDraft = conversations.find(
//       (conversation) => conversation.id === "new",
//     );

//     if (!existingDraft) {
//       const newConversation: Conversation = {
//         id: "new",
//         name: "New conversation",
//         avatar: "",
//         initials: "NC",
//         preview: "Start a conversation",
//         time: "now",
//       };

//       setConversations((previous) => [newConversation, ...previous]);

//       setMessages((previous) => ({
//         ...previous,
//         new: [],
//       }));
//     }

//     setSelectedId("new");
//     setMobileView("chat");
//   };

//   const handleSendMessage = (values: MessageFormValues, attachment: string) => {
//     const newMessage: ChatMessage = {
//       id: `message-${Date.now()}`,
//       text: attachment
//         ? `${values.message}\nAttachment: ${attachment}`
//         : values.message,
//       time: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//       sender: "me",
//     };

//     setMessages((previous) => ({
//       ...previous,
//       [selectedId]: [...(previous[selectedId] ?? []), newMessage],
//     }));

//     setConversations((previous) =>
//       previous.map((conversation) =>
//         conversation.id === selectedId
//           ? {
//               ...conversation,
//               preview: values.message,
//               time: "just now",
//             }
//           : conversation,
//       ),
//     );
//   };

//   if (!selectedConversation) {
//     return null;
//   }

//   return (
//     <main className="flex h-screen min-h-[600px] w-full overflow-hidden bg-white">
//       {/* Conversations sidebar */}
//       <div
//         className={`h-full shrink-0 ${
//           mobileView === "list" ? "flex w-full" : "hidden"
//         } md:flex md:w-[424px]`}
//       >
//         <ConversationSidebar
//           conversations={conversations}
//           selectedId={selectedId}
//           onSelect={handleSelectConversation}
//           onCompose={handleCompose}
//         />
//       </div>

//       {/* Active conversation */}
//       <section
//         className={`min-w-0 flex-1 flex-col ${
//           mobileView === "chat" ? "flex" : "hidden"
//         } md:flex`}
//       >
//         <ConversationHeader
//           conversation={selectedConversation}
//           onBack={() => setMobileView("list")}
//         />

//         <MessageScroller
//           messages={activeMessages}
//           conversation={selectedConversation}
//         />

//         <MessageComposer onSend={handleSendMessage} />
//       </section>
//     </main>
//   );
// }


"use client";

import { useState } from "react";

import {
  conversations as initialConversations,
  initialMessages,
  type ChatMessage,
  type Conversation,
} from "../data/mock-data";

import type { MessageFormValues } from "../schema/message.schema";

import { ConversationSidebar } from "./conversation-sidebar";
import { ConversationHeader } from "./conversation-header";
import { ConversationMessages } from "./message-scroller";
import { MessageComposer } from "./message-composer";

type MobileView = "list" | "chat";

export default function InstructorMessage() {
  const [conversations, setConversations] = useState(initialConversations);

  const [selectedId, setSelectedId] = useState("jane");

  const [messages, setMessages] =
    useState<Record<string, ChatMessage[]>>(initialMessages);

  const [mobileView, setMobileView] = useState<MobileView>("chat");

  const selectedConversation =
    conversations.find((conversation) => conversation.id === selectedId) ??
    conversations[0];

  const activeMessages = messages[selectedId] ?? [];

  const handleSelectConversation = (id: string) => {
    setSelectedId(id);
    setMobileView("chat");

    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === id
          ? { ...conversation, unread: false }
          : conversation,
      ),
    );
  };

  const handleCompose = () => {
    const existingDraft = conversations.find(
      (conversation) => conversation.id === "new",
    );

    if (!existingDraft) {
      const newConversation: Conversation = {
        id: "new",
        name: "New conversation",
        avatar: "",
        initials: "NC",
        preview: "Start a conversation",
        time: "now",
      };

      setConversations((previous) => [newConversation, ...previous]);

      setMessages((previous) => ({
        ...previous,
        new: [],
      }));
    }

    setSelectedId("new");
    setMobileView("chat");
  };

  const handleSendMessage = (values: MessageFormValues, attachment: string) => {
    const newMessage: ChatMessage = {
      id: `message-${Date.now()}`,
      text: attachment
        ? `${values.message}\nAttachment: ${attachment}`
        : values.message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "me",
    };

    setMessages((previous) => ({
      ...previous,
      [selectedId]: [...(previous[selectedId] ?? []), newMessage],
    }));

    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === selectedId
          ? {
              ...conversation,
              preview: values.message,
              time: "just now",
            }
          : conversation,
      ),
    );
  };

  if (!selectedConversation) {
    return null;
  }

  return (
    <main className="flex h-screen min-h-150 w-full overflow-hidden bg-white">
      {/* Conversations sidebar */}
      <div
        className={`h-full shrink-0 ${
          mobileView === "list" ? "flex w-full" : "hidden"
        } md:flex md:w-106`}
      >
        <ConversationSidebar
          conversations={conversations}
          selectedId={selectedId}
          onSelect={handleSelectConversation}
          onCompose={handleCompose}
        />
      </div>

      {/* Active conversation */}
      <section
        className={`min-w-0 flex-1 flex-col ${
          mobileView === "chat" ? "flex" : "hidden"
        } md:flex`}
      >
        <ConversationHeader
          conversation={selectedConversation}
          onBack={() => setMobileView("list")}
        />

        <ConversationMessages
          messages={activeMessages}
          conversation={selectedConversation}
        />

        <MessageComposer onSend={handleSendMessage} />
      </section>
    </main>
  );
}

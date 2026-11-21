"use client";

import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Paperclip, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  messageSchema,
  type MessageFormValues,
} from "../schema/message.schema";

interface MessageComposerProps {
  onSend: (values: MessageFormValues, attachment: string) => void;
}

export function MessageComposer({ onSend }: MessageComposerProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [attachment, setAttachment] = useState("");

  const { control, handleSubmit, reset } = useForm<MessageFormValues>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      message: "",
    },
  });

  const submitMessage = (values: MessageFormValues) => {
    onSend(values, attachment);

    reset();
    setAttachment("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <footer className="shrink-0 border-t border-gray-100 bg-white px-5 py-5 md:px-12">
      <form
        onSubmit={handleSubmit(submitMessage)}
        className="flex items-center gap-3"
      >
              <div className="flex h-12 min-w-0 flex-1 items-center border border-gray-100 px-4 
        focus-within:border-orange-400">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            aria-label="Attach a file"
            className="mr-3 shrink-0 text-orange-400 transition-colors hover:text-orange-600"
          >
            <Paperclip className="size-5" />
          </button>

          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <input
                  {...field}
                  type="text"
                  placeholder={
                    attachment
                      ? `Attachment: ${attachment}`
                      : "Type your message"
                  }
                  autoComplete="off"
                  aria-label="Type your message"
                  aria-invalid={!!fieldState.error}
                  className="h-full min-w-0 flex-1 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
                />

                {fieldState.error && (
                  <span className="sr-only" role="alert">
                    {fieldState.error.message}
                  </span>
                )}
              </>
            )}
          />

          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];

              if (file) {
                setAttachment(file.name);
              }
            }}
          />
        </div>

        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Button
              type="submit"
              variant="default"
              size="lg"
              disabled={!field.value.trim()}
              className="h-12 shrink-0 px-5 sm:px-6"
            >
              <span className="hidden sm:inline">Send</span>

              <Send className="size-5" />
            </Button>
          )}
        />
      </form>
    </footer>
  );
}

"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Paperclip, Send } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { messageSchema, type MessageFormValues } from "@/schema/message-schema";

interface MessageComposerProps {
  onSend: (values: MessageFormValues) => Promise<void>;
  isSending?: boolean;
}

export function MessageComposer({
  onSend,
  isSending = false,
}: MessageComposerProps) {
  const t = useTranslations("messages");

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<MessageFormValues>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      message: "",
    },
  });

  const submitMessage = async (values: MessageFormValues) => {
    try {
      await onSend(values);
      reset();
    } catch {
      // The workspace displays the mutation error.
      // Keep the text in the composer so the user can retry.
    }
  };

  const isBusy = isSending || isSubmitting;

  return (
    <footer className="shrink-0 border-t border-gray-100 bg-white px-5 py-5 md:px-12">
      <form
        onSubmit={handleSubmit(submitMessage)}
        className="flex items-center gap-3"
      >
        <div className="flex h-12 min-w-0 flex-1 items-center border border-gray-100 px-4 focus-within:border-orange-400">
          <button
            type="button"
            disabled
            aria-label={t("composer.attachUnavailable")}
            title={t("composer.attachUnavailable")}
            className="mr-3 shrink-0 cursor-not-allowed text-gray-300"
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
                  placeholder={t("composer.placeholder")}
                  autoComplete="off"
                  maxLength={2000}
                  aria-label={t("composer.inputAriaLabel")}
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
        </div>

        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Button
              type="submit"
              variant="default"
              size="lg"
              disabled={!field.value.trim() || isBusy}
              className="h-12 shrink-0 px-5 sm:px-6"
            >
              <span className="hidden sm:inline">
                {isBusy ? t("composer.sending") : t("composer.send")}
              </span>

              <Send className="size-5" />
            </Button>
          )}
        />
      </form>
    </footer>
  );
}

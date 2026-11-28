"use client";

import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog } from "@base-ui/react/dialog";
import { LoaderCircle, Search, Send, X } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  newMessageSchema,
  type NewMessageFormValues,
} from "@/schema/message-schema";

interface Recipient {
  id: string;
  name: string;
}

interface NewMessageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  recipients: Recipient[];
  recipientLabel: string;
  onSend: (values: NewMessageFormValues) => Promise<void>;
  searchValue: string;
  onSearchChange: (value: string) => void;
  isLoading?: boolean;
  isSending?: boolean;
}

export function NewMessageDialog({
  open,
  onOpenChange,
  recipients,
  recipientLabel,
  onSend,
  searchValue,
  onSearchChange,
  isLoading = false,
  isSending = false,
}: NewMessageDialogProps) {
  const t = useTranslations("messages");

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewMessageFormValues>({
    resolver: zodResolver(newMessageSchema),
    defaultValues: {
      teacherId: "",
      message: "",
    },
  });

  useEffect(() => {
    if (!open) {
      reset({
        teacherId: "",
        message: "",
      });
    }
  }, [open, reset]);

  const handleSendMessage = async (values: NewMessageFormValues) => {
    try {
      await onSend(values);

      reset({
        teacherId: "",
        message: "",
      });

      onOpenChange(false);
    } catch {
    }
  };

  const isBusy = isSending || isSubmitting;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/70 transition-opacity data-open:opacity-100 data-[closed]:opacity-0" />

        <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-32px)] max-w-139.25 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl outline-none">
          <div className="flex h-12 items-center justify-between border-b border-gray-100 px-4">
            <Dialog.Title className="text-sm font-medium text-gray-900">
              {t("newMessage.title")}
            </Dialog.Title>

            <button
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label={t("common.close")}
              className="flex size-7 items-center justify-center text-gray-500 transition-colors hover:text-gray-900"
            >
              <X className="size-4" />
            </button>
          </div>

          <form
            onSubmit={handleSubmit(handleSendMessage)}
            className="space-y-4 px-5 py-5"
          >
            <div className="space-y-2">
              <Label
                htmlFor="new-message-search"
                className="text-xs font-normal text-gray-900"
              >
                {t("newMessage.searchLabel")}
              </Label>

              <div className="flex h-10 items-center gap-2 border border-gray-100 px-3 focus-within:border-orange-400">
                <Search className="size-4 shrink-0 text-gray-500" />

                <input
                  id="new-message-search"
                  type="search"
                  value={searchValue}
                  onChange={(event) => onSearchChange(event.target.value)}
                  placeholder={t("newMessage.searchPlaceholder")}
                  className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none"
                />

                {isLoading && (
                  <LoaderCircle className="size-4 animate-spin text-gray-400" />
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="new-message-recipient"
                className="text-xs font-normal text-gray-900"
              >
                {recipientLabel}
              </Label>

              <Controller
                name="teacherId"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="space-y-1">
                    <Select
                      value={field.value || null}
                      onValueChange={(value) => field.onChange(value ?? "")}
                    >
                      <SelectTrigger
                        id="new-message-recipient"
                        className="h-10 w-full rounded-none border-gray-100 bg-white px-4 text-sm"
                        aria-invalid={!!fieldState.error}
                      >
                        <SelectValue
                          placeholder={t("newMessage.selectRecipient")}
                        />
                      </SelectTrigger>

                      <SelectContent>
                        {recipients.map((recipient) => (
                          <SelectItem key={recipient.id} value={recipient.id}>
                            {recipient.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {fieldState.error && (
                      <p role="alert" className="text-xs text-red-500">
                        {fieldState.error.message}
                      </p>
                    )}

                    {!isLoading && recipients.length === 0 && (
                      <p className="text-xs text-gray-500">
                        {t("newMessage.noRecipients")}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="new-message-content"
                className="text-xs font-normal text-gray-900"
              >
                {t("newMessage.messageLabel")}
              </Label>

              <Controller
                name="message"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="space-y-1">
                    <textarea
                      {...field}
                      id="new-message-content"
                      placeholder={t("newMessage.messagePlaceholder")}
                      rows={4}
                      maxLength={2000}
                      aria-invalid={!!fieldState.error}
                      className="min-h-27.5 w-full resize-none rounded-none border border-gray-100 px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:border-orange-400"
                    />

                    {fieldState.error && (
                      <p role="alert" className="text-xs text-red-500">
                        {fieldState.error.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <Button
                type="button"
                variant="secondary"
                onClick={() => onOpenChange(false)}
                className="h-10 rounded-none bg-gray-50 px-6 text-gray-900 hover:bg-gray-100"
              >
                {t("common.cancel")}
              </Button>

              <Button
                type="submit"
                variant="default"
                disabled={isBusy || recipients.length === 0}
                className="h-10 rounded-none px-5"
              >
                {isBusy ? t("newMessage.sending") : t("newMessage.send")}
                <Send className="size-4" />
              </Button>
            </div>
          </form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

"use client";

import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog } from "@base-ui/react/dialog";
import { Send, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Conversation } from "@/types/messaging-types";
import { NewMessageFormValues, newMessageSchema } from "@/features/instructor-message/schema/new-message.schema";

interface NewMessageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  recipients: Pick<Conversation, "id" | "name">[];
  recipientLabel?: string;
  onSend: (values: NewMessageFormValues) => void;
}

export function NewMessageDialog({
  open,
  onOpenChange,
  recipients,
  recipientLabel = "Teacher",
  onSend,
}: NewMessageDialogProps) {
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

  const handleOpenChange = (nextOpen: boolean) => {
    onOpenChange(nextOpen);
  };

  const handleSendMessage = (values: NewMessageFormValues) => {
    onSend(values);

    reset({
      teacherId: "",
      message: "",
    });

    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/70 transition-opacity data-open:opacity-100 data-[closed]:opacity-0" />

        <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-32px)] max-w-139.25 -translate-x-1/2 -translate-y-1/2 bg-white shadow-xl outline-none">
          {/* Dialog header */}
          <div className="flex h-12 items-center justify-between border-b border-gray-100 px-4">
            <Dialog.Title className="text-sm font-medium text-gray-900">
              New Message
            </Dialog.Title>

            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              aria-label="Close dialog"
              className="flex size-7 items-center justify-center text-gray-500 transition-colors hover:text-gray-900"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Dialog form */}
          <form
            onSubmit={handleSubmit(handleSendMessage)}
            className="space-y-4 px-5 py-5"
          >
            {/* Recipient */}
            <div className="space-y-2">
              <Label
                htmlFor="new-message-recipient"
                className="text-xs font-normal text-gray-900"
              >
                {recipientLabel}:
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
                        <SelectValue placeholder="Select..." />
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
                  </div>
                )}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label
                htmlFor="new-message-content"
                className="text-xs font-normal text-gray-900"
              >
                Message
              </Label>

              <Controller
                name="message"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="space-y-1">
                    <textarea
                      {...field}
                      id="new-message-content"
                      placeholder="Write your message here..."
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

            {/* Actions */}
            <div className="flex items-center justify-between pt-1">
              <Button
                type="button"
                variant="secondary"
                onClick={() => handleOpenChange(false)}
                className="h-10 rounded-none bg-gray-50 px-6 text-gray-900 hover:bg-gray-100"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                variant="default"
                disabled={isSubmitting || recipients.length === 0}
                className="h-10 rounded-none px-5"
              >
                Send Message
                <Send className="size-4" />
              </Button>
            </div>
          </form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

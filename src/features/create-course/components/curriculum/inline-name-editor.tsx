"use client";

import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { Check, X } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
  createCurriculumNameSchema,
  type CurriculumNameValues,
} from "../../schemas/course-schema";

interface InlineNameEditorProps {
  value: string;
  onSave: (value: string) => void;
  onCancel: () => void;
  className?: string;
}

export default function InlineNameEditor({
  value,
  onSave,
  onCancel,
  className,
}: InlineNameEditorProps) {
  const t = useTranslations("createCourse");
  const curriculumNameSchema = useMemo(
    () => createCurriculumNameSchema(t),
    [t],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CurriculumNameValues>({
    resolver: zodResolver(curriculumNameSchema),
    defaultValues: { name: value },
  });

  useEffect(() => {
    reset({ name: value });
  }, [reset, value]);

  const submit = (values: CurriculumNameValues) => {
    onSave(values.name.trim());
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`flex min-w-0 items-center gap-1 ${className ?? ""}`}
    >
      <div className="min-w-0 flex-1">
        <Input
          {...register("name")}
          autoFocus
          aria-label={t("common.editName")}
          aria-invalid={Boolean(errors.name)}
          className="h-8 min-w-0 rounded-none border-gray-200 bg-white px-2 text-sm focus-visible:border-orange-400"
        />

        {errors.name && (
          <p role="alert" className="mt-1 text-xs text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        aria-label={t("common.saveName")}
        className="flex size-8 shrink-0 items-center justify-center text-green-600 hover:bg-green-50"
      >
        <Check className="size-4" />
      </button>

      <button
        type="button"
        aria-label={t("common.cancelEditing")}
        onClick={onCancel}
        className="flex size-8 shrink-0 items-center justify-center text-gray-500 hover:bg-gray-100"
      >
        <X className="size-4" />
      </button>
    </form>
  );
}


import { useTranslations } from "next-intl";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const RecipientForm = () => {
  const t = useTranslations("giftCourse.recipient");

  return (
    <div className=" bg-white">
      <h3 className="mb-6 text-lg font-semibold text-gray-900 sm:text-xl">
        {t("title")}
      </h3>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="recipient-name">
            {t("name")}
          </Label>

          <Input
            id="recipient-name"
            name="recipientName"
            type="text"
            placeholder={t("namePlaceholder")}
            className="h-12 rounded-lg border-gray-100 "
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="recipient-email">
            {t("email")}
          </Label>

          <Input
            id="recipient-email"
            name="recipientEmail"
            type="email"
            placeholder={t("emailPlaceholder")}
            className="h-12 rounded-lg border-gray-100"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="recipient-message">
            {t("message")}
          </Label>

          <Textarea
            id="recipient-message"
            name="message"
            placeholder={t("messagePlaceholder")}
            className="min-h-32 resize-y border-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default RecipientForm;

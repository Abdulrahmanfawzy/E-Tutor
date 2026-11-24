"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import BankCard from "./bank-card";
import AddCardButton from "./add-card-button";
import { BankCardData } from "../types/earning.types";
import DashboardCard from "@/features/instructor-dashboard/components/dashboard-card";
import PeriodSelect from "@/features/instructor-dashboard/components/period-select";

export default function PaymentCardsCarousel({ cards }: { cards: BankCardData[] }) {
  const locale = useLocale();
  const t = useTranslations("instructorEarning.cards");
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
 const tStat = useTranslations("instructorEarning.statistic");
  return (
   <DashboardCard 
       title={t("title")}
    action={
      <PeriodSelect
        options={[{ label: tStat("revenue"), value: "revenue" }]}
      />
    }
   >

 <div className="flex flex-col gap-4">
      <Carousel
        setApi={setApi}
        dir={locale === "ar" ? "rtl" : "ltr"}
        opts={{ direction: locale === "ar" ? "rtl" : "ltr" }}
      >
        <CarouselContent>
          {cards.map((card) => (
            <CarouselItem key={card.id}>
              <BankCard {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {cards.map((card, i) => (
            <button
              key={card.id}
              type="button"
              aria-label={`${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                i === current ? "bg-button-primary" : "bg-orange-100"
              )}
            />
          ))}
        </div>

        <div className="flex gap-3 text-gray-500">
          <button type="button" aria-label={t("previous")} onClick={() => api?.scrollPrev()} className="hover:text-gray-900 rtl:rotate-180">
            <ArrowLeft size={18} />
          </button>
          <button type="button" aria-label={t("next")} onClick={() => api?.scrollNext()} className="hover:text-gray-900 rtl:rotate-180">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <AddCardButton />
    </div>
   </DashboardCard>
  );
}
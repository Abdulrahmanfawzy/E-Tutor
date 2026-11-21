"use client";

import { Course } from "../types/course";
import faceIcon from "@/assets/images/facebook.svg"
import twiterIcon from "@/assets/images/twitter.svg"
import whatsappIcon from "@/assets/images/whatsapp.svg"
import {
  Clock,
  BarChart3,
  Users,
  Languages,
  Captions,
  Layers,
  Star,
  ShoppingCart,
  Heart,
  Gift,
  FileText,
  Monitor,
  Award,
  BookOpen,
  Copy,
 
  Mail,
  MessageCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CoursePurchaseCardProps {
  course: Course;
}

const infoIcons = {
  clock: Clock,
  chart: BarChart3,
  users: Users,
  languages: Languages,
  captions: Captions,
  layers: Layers,
  star: Star,
};

const includeIcons = [
  Clock,
  ShoppingCart,
  FileText,
  Award,
  Monitor,
  Captions,
  BookOpen,
];

export function CoursePurchaseCard({
  course,
}: CoursePurchaseCardProps) {
  const discount = course.discountPercentage;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch (error) {
      console.error("Failed to copy course link", error);
    }
  };

  return (
    <div className="w-full rounded-sm overflow-hidden border border-slate-100 bg-white shadow-[0_6px_16px_0_rgba(0,0,0,0.08)] 
">

      {/* ================= Price ================= */}
      <div className="border-b border-slate-100 px-3 py-3">
        <div className="flex items-center justify-between gap-2">

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-slate-900">
              ${course.price.current.toFixed(2)}
            </span>

            {course.price.original > course.price.current && (
              <span className="text-xs text-slate-400 line-through">
                ${course.price.original.toFixed(2)}
              </span>
            )}
          </div>

          {/* Discount */}
          {discount > 0 && (
            <span className="bg-[#FFF0EB] rounded-sm px-2 py-1 text-[10px] font-medium text-[#FF6636]">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Offer Countdown */}
        {course.offerEndsInDays > 0 && (
          <p className="mt-2 flex items-center gap-1.5 text-[10px] text-[#FF6636]">
            <Clock className="size-3" />

            {course.offerEndsInDays} days left at this price!
          </p>
        )}
      </div>

      {/* ================= Course Info ================= */}
      <div className="space-y-3 border-b border-slate-100 px-3 py-3">
        {course.courseInfo.map((info, index) => {
          const Icon =
            infoIcons[info.icon as keyof typeof infoIcons] ?? Layers;

          return (
            <div
              key={`${info.label}-${index}`}
              className="flex items-center justify-between gap-2"
            >
              {/* Label */}
              <div className="flex min-w-0 items-center gap-1.5 text-[10px] text-slate-600">
                <Icon className="size-3.5 shrink-0 text-slate-400" />

                <span className="truncate">
                  {info.label}
                </span>
              </div>

              {/* Value */}
              <span className="max-w-[55%] truncate text-end text-[10px] text-slate-500">
                {info.value}
              </span>
            </div>
          );
        })}
      </div>

      {/* ================= Purchase Buttons ================= */}
      <div className="space-y-2 border-b border-slate-100 px-3 py-3">

        {/* Add To Cart */}
        <Button
          className="h-9 w-full rounded-sm bg-[#FF6636] text-xs font-medium text-white hover:bg-[#e95729]"
        >
          Add To Cart
        </Button>

        {/* Buy Now */}
        <Button
          variant="outline"
          className="h-9 w-full rounded-sm border-0 bg-[#FFF0EB] text-xs font-medium text-[#FF6636] hover:bg-[#ffe4da]"
        >
          Buy Now
        </Button>

        {/* Wishlist & Gift */}
        <div className="grid grid-cols-2 gap-2">

          <Button
            variant="outline"
            className="h-8 rounded-sm px-1 text-[10px] font-normal"
          >
            <Heart className="size-3" />
            Add To Wishlist
          </Button>

          <Button
            variant="outline"
            className="h-8 rounded-sm px-1 text-[10px] font-normal"
          >
            <Gift className="size-3" />
            Gift Course
          </Button>

        </div>

        {/* Guarantee Note */}
        <p className="text-[9px] leading-4 text-slate-400">
          Note: all course have 30-days money-back guarantee
        </p>
      </div>

      {/* ================= Course Includes ================= */}
      <div className="border-b border-slate-100 px-3 py-3">

        <h3 className="mb-3 text-xs font-medium text-slate-900">
          This course includes:
        </h3>

        <ul className="space-y-2.5">
          {course.includes.map((item, index) => {
            const Icon = includeIcons[index % includeIcons.length];

            return (
              <li
                key={`${item}-${index}`}
                className="flex items-start gap-2 text-[10px] leading-4 text-slate-600"
              >
                <Icon className="mt-0.5 size-3.5 shrink-0 text-[#FF6636]" />

                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ================= Share Course ================= */}
      <div className="px-3 py-3">

        <h3 className="mb-3 text-xs font-medium text-slate-900">
          Share this course:
        </h3>

        <div className="grid grid-cols-[minmax(4.5rem,1.5fr)_repeat(4,minmax(2rem,1fr))] gap-1">

          {/* Copy Link */}
          <Button
            variant="outline"
            onClick={handleCopyLink}
            className="h-8 min-w-0 rounded-sm border-none bg-gray-50 px-1"
          >
            <Copy className="size-3.5" />
            <span className="text-[9px] font-medium leading-5 tracking-normal text-gray-700">
              Copy link
            </span>
          </Button>

          {/* Facebook */}
          <Button
            variant="outline"
            
            aria-label="Share on Facebook"
            className="h-8 rounded-sm bg-gray-50 border-none px-1 "
          >
            
            <Image src={faceIcon} alt="twitter" className="w-3.5 h-3.5 "  />
          </Button>

          {/* Twitter */}
          <Button
            variant="outline"
             className="h-8 rounded-sm bg-gray-50 border-none px-1 "
            aria-label="Share on Twitter"
          >
           <Image src={twiterIcon} alt="twitter" className="w-3.5 h-3.5 "  />
          </Button>

          {/* Email */}
          <Button
            variant="outline"
             className="h-8 rounded-sm bg-gray-50 border-none px-1 "
            aria-label="Share by email"
          >
            <Mail className="size-3.5" />
          </Button>

          {/* WhatsApp */}
          <Button
            variant="outline"
             className="h-8 rounded-sm bg-gray-50 border-none px-1 "
            aria-label="Share on WhatsApp"
          >
             <Image src={whatsappIcon} alt="twitter" className="w-3.5 h-3.5 "  />
          </Button>

        </div>
      </div>

    </div>
  );
}
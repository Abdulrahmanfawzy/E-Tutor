"use client";

import SearchInput from "@/components/common/search-input";
import {
  Check,
  Bell,
  UserRound,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import profile from "@/assets/Ellipse 300.svg";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/common/language-switcher";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getNotifications,
  markNotificationAsRead,
  markAllNotificationsAsRead,
} from "@/features/instructor-dashboard/api/notifications-api";
import Link from "next/link";


export default function InstructorNavbar() {
  const locale = useLocale();
  const t= useTranslations("dashboard.navbar");
  const queryClient = useQueryClient();
  const {data:notificationData,isLoading,error}= useQuery({
      queryKey:["notifications"],
      queryFn:()=> getNotifications(),
  });

const notifications = notificationData?.data.items ?? [];
const unreadCount = notificationData?.data.unread_count ?? 0;

const markAsReadMutation= useMutation({
   mutationFn: markNotificationAsRead,
   onSuccess:()=>{
    queryClient.invalidateQueries({
      queryKey:["notifications"]
    });
   },
});

const markAllAsReadMutation = useMutation({
  mutationFn: markAllNotificationsAsRead,
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ["notifications"],
    });
  },
});
  return (
   <>
   <nav className="flex flex-row  items-center justify-between bg-white px-8 py-2 ">
   <div className="flex flex-col  items-center justify-center  ">
        <p className="text-sm text-muted-foreground">{t("goodMorning")}</p>
        <h4 className="text-lg font-semibold">{t("dashboard")}</h4>
   </div>
    <div className="flex flex-row items-center gap-4">
           
        <SearchInput  placeholder={t("searchPlaceholder")} />
         <LanguageSwitcher/>
      

<DropdownMenu>
 <DropdownMenuTrigger
  aria-label={t("notifications")}
  className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-gray-700 hover:bg-gray-100"
>
  <Bell size={16} />

  {unreadCount > 0 && (
    <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-400 px-1 text-xs text-white">
      {unreadCount}
    </span>
  )}
</DropdownMenuTrigger>
  <DropdownMenuContent align="end" className="w-80">
  
    <div className="flex items-center justify-between px-3 py-2">
      <p className="font-semibold">Notifications</p>

      {unreadCount > 0 && (
        <button
          type="button"
          onClick={() => markAllAsReadMutation.mutate()}
          disabled={markAllAsReadMutation.isPending}
          className="text-xs text-primary hover:underline hover:text-orange-400"
        >
          Mark all as read
        </button>
      )}
    </div>

    <DropdownMenuSeparator />

    {isLoading ? (
      <p className="p-4 text-center text-sm text-muted-foreground">
        Loading notifications...
      </p>
    ) :

    error ? (
  <p className="p-4 text-center text-sm text-red-500">
    Failed to load notifications
  </p>
) :
     notifications.length === 0 ? (
      <p className="p-4 text-center text-sm text-muted-foreground">
        No notifications yet
      </p>
    ) :
     (
      notifications.map((notification) => (
        <div
          key={notification.id}
          className="border-b px-3 py-3 last:border-0"
        >
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-sm font-medium">
                {notification.title ??
                  notification.data.type?.replaceAll("_", " ")}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                {notification.message ??
                  "You have a new notification"}
              </p>
            </div>
      
            {!notification.is_read && (
              <button
                type="button"
                title="Mark as read"
                onClick={() =>
                  markAsReadMutation.mutate(notification.id)
                }
                disabled={markAsReadMutation.isPending}
                className="shrink-0 text-primary hover:opacity-70"
              >
                <Check size={16} />
              </button>
            )}
          </div>
        </div>
      ))
    )}
  </DropdownMenuContent>
</DropdownMenu>


        <DropdownMenu>
   <DropdownMenuTrigger className="rounded-full outline-none">
  <Image
    src={profile}
    alt={t("profile")}
    width={70}
    height={70}
    className="cursor-pointer rounded-full"
  />
</DropdownMenuTrigger>
 
  <DropdownMenuContent align="end" className="w-48">
    <DropdownMenuItem>
      <UserRound size={16} />
      Profile
    </DropdownMenuItem>

    <DropdownMenuSeparator />

      <Link href={`/${locale}/login`}>
      <DropdownMenuItem className="text-red-500 focus:text-red-500">
      <LogOut size={16} />
      Logout
    </DropdownMenuItem>
      </Link>
  </DropdownMenuContent>
</DropdownMenu>
    </div>
   </nav>
   </>
  )
}

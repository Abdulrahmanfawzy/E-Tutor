import Topbar from "@/components/instructor/top-bar";
import AccountSettings from "../account-setting";
import SocialProfile from "../social-profile";
import Notifications from "../notifications";
import ChangePassword from "../change-password";

export default function InstructorSettingsPage() {
  return (
    <>
      <Topbar title="Settings" />

      <main className="flex-1 space-y-6 p-8">
        <AccountSettings />
        <SocialProfile />
        <div className="grid gap-6 lg:grid-cols-2">
          <Notifications />
          <ChangePassword />
        </div>
      </main>

      <footer className="flex items-center justify-between bg-white px-8 py-4 text-[11px] text-[#6E7485]">
        <p>© 2021 - Eduguard. Designed by <b className="text-[#1D2026]">Templatecookie</b>. All rights reserved</p>
        <div className="flex gap-6">
          <span>FAQs</span>
          <span>Privacy Policy</span>
          <span>Terms &amp; Condition</span>
        </div>
      </footer>
    </>
  );
}
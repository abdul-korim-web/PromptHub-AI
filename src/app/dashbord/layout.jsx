import React from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import AdminSider from "@/components/dashbordComponents/Admin/AdminSlider";
import CreatorSilder from "@/components/dashbordComponents/Creator/CreatorSlider";
import { UserSilder } from "@/components/dashbordComponents/userDashbordComponents/userSlideBar";
import { auth } from "../../../lib/auth";

export default async function DashbordLayout({ children }) {
  const sessionHeaders = await headers();

  const session = await auth.api.getSession({
    headers: sessionHeaders,
  });
console.log(session);
  if (!session || !session.user) {
    redirect("/login");
  }

  const userRole = session.user.role;
  console.log(userRole);

  return (
    <div className="flex min-h-screen lg:space-x-[50px] bg-gray-50 dark:bg-[#090d16]">
      {userRole === "admin" && <AdminSider />}
      {userRole === "creator" && <CreatorSilder />}
      {userRole === "user" && <UserSilder />}

      <div className="flex-1 p-4 lg:p-6 text-slate-900 dark:text-white">
        {children}
      </div>
    </div>
  );
}

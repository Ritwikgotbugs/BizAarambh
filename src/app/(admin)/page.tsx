import type { Metadata } from "next";
import React from "react";
import HomeCard from "@/components/dashboard/page";

export const metadata: Metadata = {
  title:
    "BizAarambh",
  description: "Startup for the future",
  icons: {
    icon: "./public/images/logo/logo.svg",
  },
};

export default function Home() {
  return (
    <HomeCard/>
  );
}

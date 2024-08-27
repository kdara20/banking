import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import Sidebar from "@/components/Sidebar";
// import { getLoggedInUser } from "@/lib/actions/user.actions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Kevin", lastName: "Dara" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      {children}
    </main>
  );
}

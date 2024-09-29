import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] overflow-scroll">
        <Link
          href=""
          className="flex items-center justify-center lg:justify-start gap-2 p-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <div className="hidden lg:flex flex-col">
            <span className="font-bold text-sm font-sans">SPARRONIX</span>
            <span className="relative left-7 text-xs">SchoolExpert</span>
          </div>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

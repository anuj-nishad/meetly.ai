"use client"
import { useIsMobile } from "@/hooks/use-mobile";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  return <div className={`grid h-screen ${isMobile ? "grid-cols-1" : "grid-cols-2  md:grid-cols-[40%_1fr]"}`}>
    {!isMobile ? (
      <div className="bg-radial from-sidebar-accent to-sidebar flex flex-col items-center justify-center ">
        <img src="/logo.svg" alt="Image" className="h-[92px] my-3" />
        <p className="font-bold text-4xl text-white">Meetly AI</p>
      </div>
    ):null}
    {children}
  </div>
}

export default Layout;
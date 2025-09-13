import { Card } from "@/components/ui/card";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid h-screen grid-cols-2 md:grid-cols-[40%_1fr]">
    <div className="bg-radial from-[#fe0c43] to-[#590317] flex flex-col items-center justify-center ">
      <img src="/logo.svg" alt="Image" className="h-[92px] my-3" />
      <p className="font-bold text-4xl text-white">Meetly AI</p>
    </div>
        {children}
  </div>
}

export default Layout;
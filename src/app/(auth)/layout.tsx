import { Card } from "@/components/ui/card";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid h-screen grid-cols-1 md:grid-cols-2">
    <div>
      <Card>
        {children}
      </Card>
    </div>
    <div className="bg-radial from-red-500 to-red-900 flex items-center justify-center rounded-l-3xl">
      <p className="font-bold text-4xl text-white">MeetlyAI</p>
    </div>
  </div>
}

export default Layout;
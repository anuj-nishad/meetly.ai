import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardNavbar } from "@/modules/dashboard/ui/components/dashboard-navbar"
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="w-full">
        {/* <SidebarTrigger /> */}
        <DashboardNavbar/>
        {children}
      </main>
    </SidebarProvider>
  )
}
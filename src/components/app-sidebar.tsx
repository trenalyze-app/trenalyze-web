import {
    Home,
    BarChart2,
    Brain,
    User,
    Settings,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

export function AppSidebar() {
    return (
        <Sidebar className="bg-black text-white">
            <SidebarContent className="flex flex-col justify-between h-full !bg-[#1F1F1F]">
                <div>
                    <div className="p-4 text-xl font-bold tracking-tight">trenalyze</div>
                    <SidebarGroup>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#" className="flex items-center gap-3 p-2 rounded-md hover:text-white">
                                        <Home className="w-5 h-5" />
                                        <span>Dashboard</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#" className="flex items-center gap-3 p-2 rounded-md hover:text-white">
                                        <BarChart2 className="w-5 h-5" />
                                        <span>Sentiment Analysis</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <a href="#" className="flex items-center gap-3 p-2 rounded-md hover:text-white">
                                        <Brain className="w-5 h-5" />
                                        <span>AI Market Analyst</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                </div>
                <div className="mb-4">
                    <SidebarMenu>
                        <p className="ms-2">Settings</p>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href="#" className="flex items-center gap-3 p-2 rounded-md hover:text-white">
                                    <User className="w-5 h-5" />
                                    <span>Profile</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <a href="#" className="flex items-center gap-3 p-2 rounded-md hover:text-white">
                                    <Settings className="w-5 h-5" />
                                    <span>Profile</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </div>
            </SidebarContent>
        </Sidebar>
    )
}

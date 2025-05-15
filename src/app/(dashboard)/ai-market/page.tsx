import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Paperclip, Mic, Menu } from "lucide-react"

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-[#78778f] text-white flex flex-col justify-between">
            <header className="px-6 pt-6 flex items-center justify-end">
                <div className="flex items-center gap-4">
                    <Menu className="w-6 h-6" />
                    <Avatar>
                        <AvatarImage src="/avatars/aris.jpg" alt="User" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </header>

            <div className="flex flex-col items-center justify-center flex-grow">
                <h1 className="text-3xl font-semibold">Hello, Conrad</h1>
            </div>

            <footer className="w-full px-6 pb-6 mb-6">
                <div className="max-w-xl mx-auto bg-[#2B2C3B] rounded-xl px-4 py-3 flex items-center gap-3">
                    <Paperclip className="text-gray-400 w-5 h-5" />
                    <Input
                        type="text"
                        className="bg-transparent text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        placeholder="Create marketing strategy according to business coffee sentiment in bandung"
                    />
                    <Mic className="text-gray-400 w-5 h-5" />
                </div>
            </footer>
        </main>
    )
}

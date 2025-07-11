// REACT
import { useState } from "react"

// COMPONENTS 
import { Header } from "../components/Header"
import { SideBar } from "../components/SideBar"

export const MainLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div>
            <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
            <div className="flex">
                <SideBar isOpen={sidebarOpen} />
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    )
}

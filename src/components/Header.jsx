// REACT 
import { Link } from "react-router-dom"

// COMPONENTS

// ICONS
import { MenuIcon, SearchIcon } from "../assets/icons/Icons"
import { YoutubeLogo } from "../assets/icons/YoutubeLogo"

export const Header = ({ toggleSidebar }) => {
    return (
        <header className="fixed w-full flex items-center justify-between gap-2 px-3 py-2 text-white bg-youtube-primary z-50">

            {/* SIDEBAR MENU */}
            <div className="flex items-center gap-6">
                <button className="p-2 hover:bg-youtube-secondary_color transition-all duration-300 rounded-full"
                    onClick={toggleSidebar}>
                    <MenuIcon className="size-6" />
                </button>

                <Link to="/" className="hidden md:flex">
                    <YoutubeLogo className="h-5" />
                </Link>
            </div>

            {/* SEARCH */}
            <div className="flex items-center border border-youtube-secondary_color rounded-full overflow-hidden">
                <input
                    type="text"
                    className="outline-none bg-transparent w-full px-4"
                    placeholder="Buscar"
                />
                <button className="py-2 px-3 border-l border-youtube-secondary_color bg-youtube-secondary_color 
                hover:bg-youtube-secondary_color transition-all duration-300">
                    <SearchIcon className="size-5" />
                </button>
            </div>

            {/* USER MENU */}
            <div>
                <img
                    src="https://avatars.githubusercontent.com/u/145029197?v=4"
                    alt="Damiro Gómez Photo"
                    className="rounded-full object-cover size-8"
                />
            </div>
        </header>
    )
}

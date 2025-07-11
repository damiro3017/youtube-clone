// REACT
import { Link } from "react-router-dom"

export const SideBarItem = ({ icon: Icon, text, href, isOpen }) => {
    return (
        <Link
            to={href}
            className="flex items-center hover:bg-youtube-secondary_color px-3 py-2 w-full rounded-full transition-all 
            duration-300"
        >
            <Icon className="size-6 transition-all duration-300 stroke-[1.5]" />
            <span
                className={`transition-all duration-300 whitespace-nowrap overflow-hidden
                            ${isOpen ? "max-w-40 opacity-100 ml-4" : "max-w-0 opacity-0 ml-0"}`}
            >
                {text}
            </span>
        </Link>
    )
}

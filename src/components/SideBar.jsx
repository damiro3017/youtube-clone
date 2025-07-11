// REACT

// COMPONENTS
import { SideBarItem } from "../components/SideBarItem";
import { SideBarData } from "../data/SideBarData";

// ICONS
import { HomeIcon } from "../assets/icons/Icons";

export const SideBar = ({ isOpen }) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`
                    fixed inset-0 bg-black z-30 transition-opacity duration-300
                    ${isOpen ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"}
                `}
            />

            {/* Sidebar Navigation */}
            <nav
                className={`
                    fixed bg-youtube-primary h-full pt-16 text-white px-2 z-40 flex flex-col items-start
                    transition-all duration-300
                    ${isOpen ? "w-60" : "w-0 md:w-16"}
                `}
            >
                {/* Home Item */}
                <SideBarItem
                    href="/"
                    icon={HomeIcon}
                    text="Principal"
                    isOpen={isOpen}
                />

                {/* Other Sidebar Items */}
                <div className="border-t border-b border-youtube-secondary_color mt-2 space-y-2 py-2 w-full">
                    {SideBarData.map((e, index) => (
                        <SideBarItem
                            key={index}
                            href={e.href}
                            icon={e.icon}
                            text={e.text}
                            isOpen={isOpen}
                        />
                    ))}
                </div>
            </nav>
        </>
    );
};

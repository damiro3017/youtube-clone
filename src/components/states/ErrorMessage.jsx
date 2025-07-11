// ICONS
import { InfoIcon } from "../../assets/icons/Icons"

export const ErrorMessage = ({ error }) => {
    return (
        <div className="flex items-center gap-4 text-white bg-youtube-secondary_color p-4 border-t-2 
        border-youtube-red_indicator">
            <span><InfoIcon className="size-4 text-youtube-red_indicator" /></span>
            <h3>
                Ha ocurrido un error:
                <span className="text-youtube-secondary_text"> {error}</span>
            </h3>
        </div>
    )
}

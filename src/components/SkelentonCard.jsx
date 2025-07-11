export const SkelentonCard = () => {
    return (
        <div className="rounded-lg overflow-hidden animate-pulse">
            <div className="aspect-video bg-youtube-secondary_color"></div>
            <div className="flex items-start py-4 gap-4">
                <div className="rounded-full size-8 bg-youtube-secondary_color" />
                <div className="-m-1 flex flex-col gap-2">
                    <div className="bg-youtube-secondary_color w-80 h-6"></div>
                    <div className="bg-youtube-secondary_color w-40 h-4"></div>
                </div>
            </div>
        </div >
    )
}

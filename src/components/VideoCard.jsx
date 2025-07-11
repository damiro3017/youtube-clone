export const VideoCard = ({ thumbnail, title, channel, channelPhoto, duration }) => {
    return (
        <div className="rounded-lg overflow-hidden group cursor-pointer ">
            <div className="relative overflow-hidden rounded-lg">
                <img
                    className="w-full aspect-video object-cover"
                    src={thumbnail}
                    alt=""
                />
                <p className="absolute px-1 right-2 bottom-2 bg-youtube-primary/80 text-white text-xs
            min-w-8 h-4 rounded-sm text-center font-medium">
                    {duration}
                </p>
            </div>
            <div className="flex items-start py-4 gap-4">
                <img className="rounded-full size-8" src={channelPhoto} alt="" />
                <div className="text-white -m-1">
                    <h1 className="font-medium">{title}</h1>
                    <p className="text-youtube-secondary_text text-sm">{channel}</p>
                </div>
            </div>
        </div>

    )
}   

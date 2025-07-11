// REACT
import axios from 'axios';
import { useEffect, useState } from "react";
import { VideoCard } from '../components/VideoCard';

// COMPONENTS

export const Home = () => {
    const [homeVideos, setHomeVideos] = useState([]);
    const filteredVideos = homeVideos.filter(
        item =>
            item.type === "video" &&
            item.thumbnail?.[0]?.url &&
            item.channelThumbnail?.[0]?.url
    );

    useEffect(() => {
        const loadHomeVideos = async () => {
            const options = {
                method: 'GET',
                url: 'https://yt-api.p.rapidapi.com/home',
                headers: {
                    'x-rapidapi-key': import.meta.env.VITE_YOUTUBE_KEY,
                    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setHomeVideos(response.data.data)
                console.log(response.data)
            } catch (error) {
                console.error('Error en la petición:', error);
            }
        };

        loadHomeVideos();
    }, []);

    return (
        <div className="bg-youtube-primary min-h-screen">
            <div className="max-w-[1500px] mx-auto">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] md:pl-20 pt-16 px-4 gap-6">
                    {filteredVideos.map((video, index) => (
                        <VideoCard
                            key={index}
                            thumbnail={video.thumbnail[0].url}
                            title={video.title}
                            channel={video.channelTitle}
                            channelPhoto={video.channelThumbnail[0].url}
                            duration={video.lengthText}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

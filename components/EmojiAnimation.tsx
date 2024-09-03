"use client"
import { useEffect, useState } from 'react';
import mood from "./jsonFile/mood.json";

const EmojiAnimation = () => {
    const [emoji, setEmoji] = useState(mood.mood.at(0)?.emoji);
    const [track, setTrack] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTrack((prevTrack) => {
                const nextTrack = prevTrack >= mood.mood.length - 1 ? 0 : prevTrack + 1;
                setEmoji(mood.mood.at(nextTrack)?.emoji);
               
                return nextTrack;
            });
        }, 500);
   

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div>
            {emoji}
        </div>
    );
};

export default EmojiAnimation;

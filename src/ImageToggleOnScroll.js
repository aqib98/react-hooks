import React, { useEffect, useRef, useState } from "react";

const ImageToggleOnScroll = ({primaryImage, secondaryImage}) => {

    const imageRef = useRef(null);

    const [inView,setInView] = useState(false);
    const [isLoading,setIsLoading] = useState(true);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    useEffect(() => {
        setIsLoading(false);
        setInView(isInView());
        window.addEventListener("scroll",scrollHandler);
        return () => {
            window.addEventListener("scroll",scrollHandler);
        }
    },[])

    const scrollHandler = () => {
        setInView(isInView())
    }

    return (
        <img 
            
            src = {
                isLoading  
                ? 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' // 1x1gif 
                : inView 
                ? secondaryImage 
                : primaryImage
            }

            alt = ""
            ref = {imageRef}
        />
    )
}

export default ImageToggleOnScroll;
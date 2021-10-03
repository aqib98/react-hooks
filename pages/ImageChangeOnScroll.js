import React, { useEffect, useState } from "react"
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
    const [currentSpeakerId,setCurrentSpeakerId] = useState(0);
    const [mouseEventCount,setMouseEventCount] = useState(0);

    useEffect(() => {
        window.document.title = `SpeakerId: ${currentSpeakerId}`;
        console.log(`useEffect: setting title to ${currentSpeakerId}`);
    },[currentSpeakerId])

    return (
        <div>
            <span>mouseEventCount: {mouseEventCount}</span>
            {[187,823,1124,1269,1725].map((each,index) => {
                return (
                    <div key = {index}
                        onMouseOver = {() => {
                            setCurrentSpeakerId(each);
                            setMouseEventCount(mouseEventCount + 1);
                            console.log(`on MouseOver ${each}`);
                        }}
                    >
                        <ImageToggleOnScroll 
                        primaryImage={`/static/bw/Speaker-${each}.jpg`} 
                        secondaryImage={`/static/color/Speaker-${each}.jpg`}/>
                    </div>
                )
            })}
        </div>
    )
}

export default ImageChangeOnScroll
import React from "react"
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImage="/static/bw/Speaker-187.jpg" secondaryImage="/static/color/Speaker-187.jpg"/>
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImage="/static/bw/Speaker-823.jpg" secondaryImage="/static/color/Speaker-823.jpg"/>
        </div>
    )
}

export default ImageChangeOnMouseOver
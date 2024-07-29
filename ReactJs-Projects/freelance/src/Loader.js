import React from 'react'
import  Load from "./video/Loader.mp4"

const Loader = () => {
    return (
        <div className="loader-container">
        <div className="loader">
            <video src={Load} ></video>
        </div>
        </div>
    )
}

export default Loader
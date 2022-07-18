import React, { useState } from "react";

import pendingPic from "../pending-picture.jpg"

import "./Carousel.css"
import "../../context/Buttons.css"

function Carousel ({images}) {

    // const images = ['1', '2', '3', '4']
    const [currentIndex, setCurrentIndex] = useState(0)
    // const carouselInfiniteScroll = () => {
    //     if (currentIndex === images.length - 1) {
    //         return setCurrentIndex(0)
    //     }
    //     return setCurrentIndex(currentIndex + 1)
    // }

    // useEffect(() => {
    //     const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
    //     return () => clearInterval(interval)
    // })

    const previous = (e) => {
        e.preventDefault()

        if (currentIndex === 0) {
            return setCurrentIndex(images.length - 1)
        }
        return setCurrentIndex(currentIndex - 1)
    }

    const next = (e) => {
        e.preventDefault()

        if (currentIndex === images.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }



    return (
        <>
        <div className="carousel-container">
            { images.map((image, index) => (
                <img className='carousel-item'
                style={{transform: `translate(-${currentIndex * 100}%)`}}
                key={index}
                src={image.image_url}
                alt="Camera"
                />
            ))}
        </div>
        <div className="prev-next-btns">
            <button className="demo-btn" onClick={previous}>Previous</button>
            <button className="demo-btn" onClick={next}>Next</button>
        </div>
        </>
    )
}

export default Carousel

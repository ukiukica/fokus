import React, { useState, useEffect } from "react";

import "./Carousel.css"

function Carousel () {

    const data = ['1', '2', '3', '4']
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    // useEffect(() => {
    //     const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
    //     return () => clearInterval(interval)
    // })

    const previous = (e) => {
        e.preventDefault()

        if (currentIndex === 0) {
            return setCurrentIndex(data.length - 1)
        }
        return setCurrentIndex(currentIndex - 1)
    }

    const next = (e) => {
        e.preventDefault()

        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    return (
        <>
        <div className="carousel-container">
            { data.map((item, index) => (
                <h1 className='carousel-item'
                style={{transform: `translate(-${currentIndex * 100}%)`}}
                key={index}
                >{item}
                </h1>
            ))}
        </div>
        <div>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
        </>
    )
}

export default Carousel

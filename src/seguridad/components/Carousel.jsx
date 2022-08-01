import { useEffect, useState } from 'react'
import fondo from '../../assets/fondo.jpg'
import fondo2 from '../../assets/fondo2.jpg'

export const Carousel = () => {

    const images = [fondo, fondo2]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            selectetNewImage(selectedIndex, images)
        }, 5000)

        return () => clearInterval(interval)
    })

    const selectetNewImage = (index, images, next = true) => {
        setLoaded(false)
        setTimeout(() => {
            const condition = next ? selectedIndex < (images.length - 1) : selectedIndex > 0
            const nextIndex =
                next ? condition ? selectedIndex + 1 : 0
                    : condition ? selectedIndex - 1 : images.length - 1

            setSelectedImage(images[nextIndex])
            setSelectedIndex(nextIndex)
        }, 500);


    }



    const previous = () => {
        selectetNewImage(selectedImage, images, false)
    }

    const next = () => {
        selectetNewImage(selectedImage, images)
    }

    return (
        <>
            <img
                src={`${selectedImage}`}
                alt="Gentil"
                className={`imgCarousel ${loaded ? "loaded" : ''}`}
                onLoad={() => setLoaded(true)}
            />
            <div className='carouselButtonContainer'>
                <button className='carouselButton' onClick={previous}>{'<'}</button>
                <button className='carouselButton' onClick={next}>{'>'}</button>
            </div>
        </>
    )
}

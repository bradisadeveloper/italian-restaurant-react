import React from 'react'
import './gallery.scss'
import chickenMarsala from './images/chickenmarsala.jpg'
import salad from './images/salad.jpg'
import salmon from './images/salmon.jpg'
import spaghetti from './images/spaghetti.jpg'
import tiramisu from './images/tiramisu.jpg'
import blueHawaiian from './images/bluehawaiian.jpg'
import {SRLWrapper} from "simple-react-lightbox"

function Gallery() {
    // For future reference if I would like to modify lightbox gallery
    
    const lightbox = document.createElement('div')
    lightbox.id = 'lightbox'
    document.body.appendChild(lightbox)
    // const lightbox = document.querySelector('lightbox')

    const images = document.querySelectorAll('img-container')
    images.forEach(image => {
        image.addEventListener('click', e => {
            lightbox.classList.add('active')
        })
    })
    
    return (
        <SRLWrapper>
        <div className="gallery">
            <div className="img-container">
                <img src={chickenMarsala} alt='Chicken Marsala' />
            </div>
            <div className="img-container">
                <img src={salad} alt='Ceasar Salad' />
            </div>
            <div className="img-container">
                <img src={spaghetti} alt='Spaghetti'/>
            </div>
            <div className="img-container">
                <img src={tiramisu} alt='Tiramisu'/>
            </div>
            <div className="img-container">
                <img src={salmon} alt='Salmon in Pentola' />
            </div>
            <div className="img-container">
                <img src={blueHawaiian} alt='Blue Hawaiian' />
            </div>
        </div>
        </SRLWrapper>
    )
}

export default Gallery
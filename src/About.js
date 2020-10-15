import React from 'react'
import './about.scss'
import trattoria2 from './images/trattoria2.jpg'
import trattoria3 from './images/trattoria3.jpg'
import trattoria4 from './images/trattoria4.jpg'

function About() {
    return (
        <div className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Why eat at Trattoria Due?
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">Fresh ingredients made in every dish</h3>
                        <p className="paragraph">
                            ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima culpa accusamus ducimus vitae cum id ad perspiciatis ab necessitatibus. Hic totam a odit suscipit quidem possimus neque magnam praesentium.
                        </p>

                    <h3 className="heading-tertiary u-margin-bottom-small">Family oriented staff and atmosphere</h3>
                        <p className="paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, placeat deserunt. Ex at, laudantium dignissimos.
                        </p>                      
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={trattoria2} alt="fresh pasta" className="composition__photo composition__photo--p1" />
                        <img src={trattoria3} alt="restaurant table" className="composition__photo composition__photo--p2" />
                        <img src={trattoria4} alt="pasta dish" className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About
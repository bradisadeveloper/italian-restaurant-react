import React from 'react'
import './navigation.scss'

function Navigation() {
    return (
        <div className="navigation">

            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item">About Us</li>
                    <li className="navigation__item">Menu</li>
                    <li className="navigation__item">Gallery</li>
                    <li className="navigation__item">Order Online</li>
                    <li className="navigation__item">Contact Us</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
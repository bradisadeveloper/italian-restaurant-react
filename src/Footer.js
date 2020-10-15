import React from 'react'
import './footer.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__name-box">
                <p className="footer__name">TRATTORIA DUE</p>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href={"www.google.com"} className="footer__link" >About</a></li>
                            <li className="footer__item"><a href={"www.google.com"} className="footer__link">Menu</a></li>
                            <li className="footer__item"><a href={"www.google.com"} className="footer__link">Gallery</a></li>
                            <li className="footer__item"><a href={"www.google.com"} className="footer__link">Reservations</a></li>
                            <li className="footer__item"><a href={"www.google.com"} className="footer__link">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built by <a href={"www.bradisadeveloper.com"} className="footer__link">Brad Is A Developer</a> for his portfolio. Copyright &copy; 2020.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
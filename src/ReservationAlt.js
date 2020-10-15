import { render } from 'node-sass';
import React from 'react'
import './reservation.scss'

function Reservation() {

    return (
        <div className="container">
        {/* Hours and Contact */}
        <div className="container-time">
            <h2 className="heading">Time Open</h2>
            <h3 className="heading_days">Monday-Friday</h3>
            <p>Lunch: Noon - 4pm</p>
            <p>Dinner: 5pm - 10pm</p>

            <h3 className="heading_days">Saturday & Sunday</h3>
            <p>Lunch: Noon - 3pm</p>
            <p>Dinner: 4pm - 11pm</p>

            <br />

            <h1 className="heading_phone">Call Us: (908)-000-0009</h1>
        </div>

        {/* Reservation Form */}
            <div className="container-form">
                <form action="#" id="form">
                    <h2 className="heading handing-yellow">Secure Your Reservation</h2>

                    <div className="form-field">
                        <p>First Name:</p>
                        <input type="text" id="first" placeholder="First Name" />
                    </div>
                    <div className="form-field">
                        <p>Last Name:</p>
                        <input type="text" id="last" placeholder="Last Name" />
                    </div>
                    <div className="form-field">
                        <p>Primary Number:</p>
                        <input type="tel" id="phone" />
                    </div>
                    <div className="form-field">
                        <p>Date:</p>
                        <input type="date" />
                    </div>
                    <div className="form-field">
                        <p>Time:</p>
                        <input type="time" />
                    </div>
                    <div className="form-field">
                        <p>How many people:</p>
                        <select name="select" id="#">
                            <option value="1">1 person</option>
                            <option value="2">2 people</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="5">5 people</option>
                            <option value="6">6 people</option>
                            <option value="7">7 people</option>
                            <option value="8">8 people</option>
                            <option value="9">9 people</option>
                            <option value="10">10 people</option>
                            <option value="11">11 people</option>
                            <option value="12">12 people</option>
                        </select>
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Reservation
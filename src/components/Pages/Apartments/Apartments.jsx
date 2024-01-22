import React from 'react'
import './Apartments.scss'
import wrapperApartments from '../../../img/apartments/apartments-wrapper.webp'
import imageDecor1 from '../../../img/apartments/apartment-image-decor1.webp'
import imageDecor2 from '../../../img/apartments/apartment-image-decor2.webp'
import imageDecor3 from '../../../img/apartments/apartment-image-decor3.webp'
import apartmentsImg1 from '../../../img/apartments/apartments-img1.webp'
import ContactUs from '../../Homepage/ContactUs/ContactUs'
export default function Apartments() {
    return (
        <section className='apartments'>
            <div className='container'>
                <div className='appartments-info'>
                    <div className='appartments-wrapper'>
                        <img src={wrapperApartments} alt="appartments wrapper" />
                        <span className='appartments-title'>Furnished Apartments <br /><span> in Dubai</span></span>
                    </div>
                    <div className='appartments-desc'>
                        <span>This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact it can trigger self-censoring. <br /><br />
                            One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: </span>
                        <span>This response is important for our ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact it can trigger self-censoring. <br /><br />
                            One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: </span>
                        <img className='apartments-img-1' src={apartmentsImg1} alt="Dubai" />
                    </div>
                    <div className='appartments-desc'>
                        <h3>Methods for Everyone</h3>
                        <span>Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless. <br /> <br />
                            One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</span>
                        <div className='apartments-about-author'>
                            <div className='about-decor'>
                                <span>”</span>
                            </div>
                            <div className='about-text'>
                                <p>Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. emotional sensation of stress from our first</p>
                                <span className='author'>Paul <br /><span className='about-author'>Elite Author</span></span>
                            </div>
                        </div>
                        <div className='apartments-image-container'>
                            <div className='apartments-image-block1'>
                                <img className='image-decoration' src={imageDecor1} alt="Dubai apartments" />
                                <img className='image-decoration1' src={imageDecor2} alt="Dubai apartments" />
                            </div>
                            <div className='apartments-image-block2'>
                                <img src={imageDecor3} alt="Dubai apartments" />
                            </div>
                        </div>
                    </div>
                    <div className='skills'>
                        <div className='skills-container'>
                            <div className='skills-info'>
                                <h3>20</h3>
                                <span>YEARS WORKING</span>
                            </div>
                            <div className='skills-info'>
                                <h3>7</h3>
                                <span>TALANTED MANAGERS</span>
                            </div>
                            <div className='skills-info'>
                                <h3>100<sup>+</sup></h3>
                                <span>COMPLITLY PROJECTS</span>
                            </div>
                        </div>
                    </div>
                    <div className='appartments-desc'>
                        <h3>Challenge</h3>
                        <span>To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</span>
                    </div>
                </div>
                <div className='appartments-desc'>
                    <h2>Everything along the way</h2>
                    <span>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</span>
                    <ul>
                        <li>Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. </li>
                        <li>Everything was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.</li>
                        <li>One touch of a red-hot stove is usually all we need to avoid that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress from our first instances of social rejection or ridicule. </li>
                        <li>We quickly learn to fear and thus automatically avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.</li>
                    </ul>
                </div>
                <ContactUs />
                <section className="options">
                    <div className='appartments-table'>
                        <table className="options__table">
                            <tbody>
                                <tr className="options__table-row options__table-row--title">
                                    <th className="options__table-cell options__table-cell--title">
                                        Included in the package
                                    </th>
                                    <th className="options__table-cell options__table-cell--title">
                                        Complete management
                                    </th>
                                    <th className="options__table-cell options__table-cell--title">
                                        Partial control
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Real estate advertising
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Search for tenants
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>

                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Conclusion of a lease agreement
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Getting paid
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Key handover
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Payment processing
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Dealing with repair requests
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        DEWA connection (electricity/water)
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Registration of the rental agreement
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Ejari Separate administrator
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Detailed inspection of the object
                                    </th>
                                    <th className="options__table-cell"></th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Property preparation before arrival
                                    </th>
                                    <th className="options__table-cell"></th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Reporting
                                    </th>
                                    <th className="options__table-cell"></th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Repair Request Management
                                    </th>
                                    <th className="options__table-cell"></th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                                <tr className="options__table-row">
                                    <th className="options__table-cell options__table-cell--title">
                                        Repair management
                                    </th>
                                    <th className="options__table-cell"></th>
                                    <th className="options__table-cell">
                                        <span>✓</span>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </section >
    )
}

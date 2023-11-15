import React from 'react'
import './Home.css';
import homeBanner from '../images/home_banner.jpg';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img src={homeBanner} className='home__image' />

                <div className="home__row">
                    <Product id="211556151" title="Eye Massager with Heat, Heated Eye Mask with Bluetooth Music for Migraine" price={29.99} image="https://i.imgur.com/7GL3JGl.jpg" rating={5} />
                    <Product id="45645465" title="Kawaii Light Purple Gaming Chair with Bunny Ears, Ergonomic Cute Gamer Chair with Footrest and Massage" price={100.75} image="https://i.imgur.com/2IhWi3O.jpg" rating={3} />
                </div>

                <div className="home__row">
                    <Product id="78984956" title="40-inch D-Series Full HD 1080p Smart TV with AMD FreeSync, Apple AirPlay and Chromecast Built-in" price={168.00} image="https://i.imgur.com/DRUybo3.jpg" rating={1} />
                    <Product id="51568984" title="Wireless Controller – Midnight Black" price={35.00} image="https://i.imgur.com/RvmqNeL.jpg" rating={5} />
                    <Product id="23486843" title="Food Dehydrator for Jerky, Large Drying Space with 6.48ft², 600W Dehydrated Dryer, 6 Stainless Steel Trays" price={159.00} image="https://i.imgur.com/lH4YRUd.jpg" rating={4} />
                </div>

                <div className="home__row">
                    <Product id="26516554" title="High Fidelity Vinyl Turntable Record Player with Audio Technica AT95E Cartridge, Belt Drive, Built-in Preamp" price={249.99} image="https://i.imgur.com/lH4YRUd.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home

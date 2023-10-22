import React from 'react'
import './Home.css';
import homeBanner from '../images/home_banner.jpg';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img src={homeBanner} className='home__image' />
            </div>
        </div>
    )
}

export default Home

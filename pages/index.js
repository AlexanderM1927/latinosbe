import React from 'react'

const Home = () => {
    return (
        <div className='home'>
            <video autoPlay muted loop playsInline className='home__video'>
                <source src='videos/intro.mp4' type='video/mp4' />
            </video>
        </div>
    )
}


export default Home
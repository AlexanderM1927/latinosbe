import React from 'react'
import Image from './Image'

const Job = ({ object }) => {
    return (
        <div className='job'>
            <div className='head'>
                <Image source={object.image} width='300' height='200' />
                <div className='date'>
                    { object.date }
                </div>
            </div>
            <div className='info'>
                <span className='title'>{ object.title }</span>
            </div>
            <div className='info'>
                <span className='title'>Location: </span> {object.location}
            </div>
        </div>
    )
}


export default Job
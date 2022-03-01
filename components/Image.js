import React from 'react'

const Image = ({ source, alt, width, height, id }) => {
    return (
        <img
            src={source}
            alt={alt}
            width={width}
            height={height}
            id={id}
        />
    )
}


export default Image
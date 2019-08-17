import React from 'react'

const Image = ({image, width, height, imageName}) => (
    <img src={image} width={width} height={height} alt={imageName} />
);

export default Image;
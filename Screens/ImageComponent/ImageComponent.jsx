import React, { useState } from 'react';
import './ImageComponent.css';

const ImageComponent = () => {
    const [hovered, setHovered] = useState(null);

    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
    ];

    return (
        <div className="image-grid">
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`image-wrapper ${hovered === index ? 'hovered' : ''}`}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                >
                    <img src={src} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default ImageComponent;

import React, { useState } from 'react';
import './ImageComponent.css';
import image1 from '../../assets/img1.png';
import image2 from '../../assets/img2.png';
import image3 from '../../assets/img3.png';
import image4 from '../../assets/img4.png';
import image5 from '../../assets/img5.png';

const ImageComponent = () => {
    const [zoomed, setZoomed] = useState(4); // Initially zoom the last image

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
    ];

    return (
        <div>
            <div className='top'>
                <div className='collection-heading'>COLLECTION</div>
                <div className='collection-lorem'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita reiciendis quisquam ratione, modi rem consequuntur, eligendi sint cupiditate accusamus velit vel quidem, esse quaerat! Eum illum id vero dicta iusto.
                </div>
            </div>
            <div className='bottom'>
                <div className='bottom-left'>
                    {images.slice(0, 4).map((image, index) => (
                        <div
                            key={index}
                            className={`image-item ${zoomed === index ? 'zoomed' : ''}`}
                            onMouseEnter={() => setZoomed(index)}
                        >
                            <img src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className='bottom-right'>
                    <div
                        className={`image-item ${zoomed === 4 ? 'zoomed' : ''}`}
                        onMouseEnter={() => setZoomed(4)}
                    >
                        <img src={images[4]} alt="Image 5" />
                    </div>
                </div>
            </div>
            <button className='collection-btn'>Shop Our Style!</button>
        </div>
    );
};

export default ImageComponent;




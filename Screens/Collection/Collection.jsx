import React from 'react'
import './Collection.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
const Collection = () => {
  return (
    <div>
        <div className='top'>
        <div className='collection-heading'>COLLECTION</div>
        <div className='clooection-lorem'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita reiciendis quisquam ratione, modi rem consequuntur, eligendi sint cupiditate accusamus velit vel quidem, esse quaerat! Eum illum id vero dicta iusto.</div>
        </div>
        <div className='bottom'>
            <div className='bottom-left'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
            <div className='bottom-right'>
                <img src={img5} alt="" />
            </div>
        </div>
        <button className='collection-btn'>Shop Our Style!</button>
    </div>
  )
}

export default Collection
import react from "react";
import images from './pexel.jpg';
import imgone from './dish.jpg';
import imgtwo from './spec.jpg';

function Center(params) {
    return (
        <>
            <div className='next-container'>
                <div className='image-sec'>
                    <img src={images} className='can-sec' />
                    <img src={imgone} className='can-third' />
                    <img src={imgtwo} className='can-fourth' />
                </div>
            </div></>
    )
}

export default Center;

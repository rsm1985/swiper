import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import './swiper-bundle.min.css';
import Img from './est.jpg';

const Image = () => {
    return(
        <div>
            <img style={{width: "100%", height: "150px", objectFit: "cover"}} src={Img} alt=""/>
        </div>)
}
const Chart = ({...props}) => {
    return (
        <div >
            <Swiper
                {...props}
            >
                <SwiperSlide ><Image/></SwiperSlide>
                <SwiperSlide ><Image/></SwiperSlide>
                <SwiperSlide ><Image/></SwiperSlide>
                <SwiperSlide ><Image/></SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Chart
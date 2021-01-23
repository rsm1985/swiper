import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'
// Import Swiper styles
import './swiper-bundle.min.css';
import Img from './est.jpg';
SwiperCore.use([Navigation, Pagination, Scrollbar])
const Image = () => {
    return(
        <div>
            <img style={{width: "100%", height: "300px", objectFit: "cover", opacity: ".2"}} src={Img} alt=""/>
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
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper'
// Import Swiper styles
import './swiper-bundle.min.css';
import Pages from './pagination'
SwiperCore.use([Navigation, Pagination, Scrollbar])

const Chart = ({pages,activeSlide,children, ...props}) => {
    return (
        <>
            <Swiper
                {...props}
            >
                {children.props.children.map((item)=><SwiperSlide >{item}</SwiperSlide>)}

            </Swiper>
        {pages ? <Pages length={children.props.children.length} active={activeSlide}/> : null}
        </>
    )
}

export default Chart
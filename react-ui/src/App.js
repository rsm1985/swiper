import React, {useCallback, useEffect, useState, useRef} from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Chart from './chart'
import Pages from './pagination'
import Img from './est.jpg';
import Img1 from './tallin1.jpg';
import Img2 from './tallin2.jpg';
import Img3 from './tallin3.jpg';

const Image = ({img}) => {
    return (
        <div>
            <img style={{width: "100%", height: "300px", objectFit: "cover", opacity: ".2"}} src={img} alt=""/>
        </div>)
}


const tarifs = [
    {
        id: 1,
        name: "tarif 1",
        img: Img,
        freeConditions: [],
        included: [
            {
                id: 7346,
                img: Img1
            }, {
                id: 7347,
                img: Img1
            }, {
                id: 7348,
                img: Img1
            }, {
                id: 7349,
                img: Img1
            }
        ]
    },
    {
        id: 2,
        name: "tarif 2",
        img: Img,
        freeConditions: [],
        included: [
            {
                id: 6346,
                img: Img2
            }, {
                id: 6347,
                img: Img2
            }, {
                id: 6348,
                img: Img2
            }, {
                id: 67349,
                img: Img2
            }
        ]
    },
    {
        id: 3,
        name: "tarif 3",
        img: Img,
        freeConditions: [],
        included: [
            {
                id: 2346,
                img: Img3
            }, {
                id: 2347,
                img: Img3
            }, {
                id: 7248,
                img: Img3
            }, {
                id: 72349,
                img: Img3
            }
        ]
    }
]
let controlledSwiper = null;
const App = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    // const controlledSwiper = useRef()
    // console.log("controlledSwiper", controlledSwiper)
    // const [message, setMessage] = useState(null);
    // const [isFetching, setIsFetching] = useState(false);
    // const [url, setUrl] = useState('/api');
    //
    // const fetchData = useCallback(() => {
    //   fetch(url)
    //     .then(response => {
    //       if (!response.ok) {
    //         throw new Error(`status ${response.status}`);
    //       }
    //       return response.json();
    //     })
    //     .then(json => {
    //       setMessage(json.message);
    //       setIsFetching(false);
    //     }).catch(e => {
    //       setMessage(`API call failed: ${e}`);
    //       setIsFetching(false);
    //     })
    // }, [url]);
    //
    // useEffect(() => {
    //   setIsFetching(true);
    //   fetchData();
    // }, [fetchData]);
    //   console.log(activeSlide)
    return (
        <div style={{maxWidth: 800, width: "100%"}}>
            <Chart spaceBetween={20}
                   slidesPerView={1}
                   navigation
                   onSlideChange={(swiper) => {setActiveSlide(swiper.activeIndex);
                       controlledSwiper.slideTo(0)
                   }}
                   activeSlide={activeSlide}
                   breakpoints={{
                       // when window width is >= value
                       1000: {
                           slidesPerView: 1.05,
                           spaceBetween: 10
                       }
                   }
                   }
            >
                <div
                >
                    {tarifs.map((item) => <Image key={item.id} img={item.img}/>)}
                </div>
            </Chart>
            <div>В тариф входят</div>
            <Chart ref={controlledSwiper}
                spaceBetween={20}
                slidesPerView={3.2}
                onSwiper={(swiper) => {controlledSwiper  = swiper}}
            >
                <div>
                {tarifs[activeSlide].included.map((item) =>
                    <SwiperSlide key={item.id}>
                        <Image key={item.id} img={item.img}/>
                    </SwiperSlide>)}
                </div>
            </Chart>
            <Pages length={tarifs.length} active={activeSlide}/>
        </div>
    );
}

export default App;

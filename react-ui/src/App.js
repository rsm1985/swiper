import React, {useCallback, useEffect, useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Chart from './chart'
import Pages from './pagination'
import Img from './est.jpg';

const Image = () => {
    return (
        <div>
            <img style={{width: "100%", height: "300px", objectFit: "cover", opacity: ".2"}} src={Img} alt=""/>
        </div>)
}

const data = [
    {
        id: 7346,
        img: Img
    }, {
        id: 7347,
        img: Img
    }, {
        id: 7348,
        img: Img
    }, {
        id: 7349,
img: Img
    }
]

function App() {
    const [activeSlide, setActiveSlide] = useState(0);
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
                   onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                   pages
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
                    {data.map((item) => <Image key={item.id}/>)}
                </div>
            </Chart>
            {/*<Pages length={2} active={activeSlide}/>*/}
        </div>
    );
}

export default App;

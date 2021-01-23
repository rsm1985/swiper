import React, { useCallback, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './chart'

function App() {
  const [message, setMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [url, setUrl] = useState('/api');

  const fetchData = useCallback(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setMessage(json.message);
        setIsFetching(false);
      }).catch(e => {
        setMessage(`API call failed: ${e}`);
        setIsFetching(false);
      })
  }, [url]);

  useEffect(() => {
    setIsFetching(true);
    fetchData();
  }, [fetchData]);

  return (
      <div style={{maxWidth: 800, width: "100%"}}><Chart spaceBetween={20}
               slidesPerView={1.05}
               navigation
               pagination={{ clickable: true }}
               onSlideChange={() => console.log(111)}
               onSwiper={(swiper) => console.log(swiper)}
               /></div>
  );

}

export default App;

import React from 'react'

export const Pagination = ({length, active}) => {
    const pagination = new Array(length)
    pagination.fill(1)
    return (<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
    {pagination.map((item, index)=>
        <div style={{
            margin:"0 5px",
            width: active===index ? 20 : 6,
            height: 6,
            backgroundColor: "blue"}}
             key={`${index}z`}/>

        )}
    </div>)
};
export default Pagination
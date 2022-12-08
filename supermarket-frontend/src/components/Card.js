import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';

export default function Card(props) {
    // console.log(props)
    const {type, url} = props;
    // const productLink = `/products/${type}`
  return (
    <>
    <a href={'/categories/' + type} style={{textDecoration: 'none'}}>
    <div className='card1' style={{ backgroundImage: `url(${url})`}}
    >
        <div className='text'>{type}</div>
    </div>
    </a>
    </>
  )
}

Card.defaultProps = {
    type:"Clothing",
    url: "https://source.unsplash.com/featured/300x201"
}

// height: 300px;
//     width: 200px;
//     margin: 30px 50px;
//     background-color: beige;
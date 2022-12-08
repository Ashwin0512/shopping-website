import React from 'react'
import { Link } from 'react-router-dom';
import "./ProductCard.css"

export default function ProductCard(props) {
  let {itemname, category, price, url} = props;
  return (
    <>
    {/* <Link to={'/categories/' + category + '/' + itemname} style={{textDecoration: 'none'}}> */}
    <div className="pcard">
      <div className="image">
        <img src={url} alt="Image" />
      </div>
      <div className="smalldesc" >{itemname}</div>
      <div className="pricetag">{price}</div>
    </div>
    {/* </Link> */}
    </>
  )
}
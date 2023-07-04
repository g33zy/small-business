import React from 'react'
import { useParams } from 'react-router'

function Details(props) {

    const id = useParams()
    console.log(id)
    const biz = props.listing.find(b => b.id == id.id)
    console.log(biz)
  return (
    <div className='details-container'>
        <h2>{biz.name}</h2>
        <h4>{biz.address}</h4>
        <h4>{biz.hours}</h4>
        <p>{biz.description}</p>
        <div className='business-images'>
            <img src={biz.image}/>
        </div>
        
        
        
    </div>
  )
}

export default Details
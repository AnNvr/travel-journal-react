import React from 'react'
import '../styles/card.css'

export default function Card(props){
    return(
        <main>
            <div className='card'>
                <div className='image-container'>
                    <img className='image' src={props.imageUrl} />
                </div>
                <section>
                    <div className='location-container'>
                        <p className='location'><i className="fa-solid fa-location-dot" style={{color:'#F55A5A'}}/>{props.location}</p>
                        <a className='google-link' href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <div className='data-container'>
                        <h1 className='title'>{props.title}</h1>
                        <p className='dates'>{props.startDate} - {props.endDate}</p>
                        <p className='description'>{props.description}</p>
                    </div>
                </section>
            </div>
        </main>
    )
}
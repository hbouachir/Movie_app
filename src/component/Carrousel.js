import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function Carrousel({filmList}) {
    return (
        <div className='carr'    >
           
        {filmList.map(el=>
        <Carousel>
        
        <Carousel.Item>
    <img
      className="d-block w-100"
      src="el.URL"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>{el.Name}</h3>
          </Carousel.Caption>
  </Carousel.Item>
  </Carousel>  
        )}
       
           
     


        </div>
    )
}

export default Carrousel

import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


function Carrousel({filmList}) {
    return (
        <div className='parent'      >
           
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src={filmList[0].URL}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{filmList[0].Name}</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     className="d-block w-100 "
      src={filmList[1].URL}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>{filmList[1].Name}</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     className="d-block w-100 "
      src={filmList[2].URL}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>{filmList[2].Name}</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


        </div>
    )
}

export default Carrousel

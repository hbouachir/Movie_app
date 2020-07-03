import React from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'

function Film({filmList}) {
    return (
        <div className="flex">
           {filmList.map(el=>{
               
               <Card>
                <Card.Img variant="top" src={el.URL} />
                <Card.Body>
                  <Card.Title>{el.Name}</Card.Title>
                  <Card.Text>
                    {el.Rate}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              







           })
           
           
           
           }



            
        </div>
    )
}

export default Film

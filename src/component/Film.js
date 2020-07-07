import React,{useState} from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'

function Film({filmList}) {
  const [text,setText]=useState('')
  const [newFilms,setNewFilms]=useState(filmList)
    return (
      
      <div>
        
      <input type='text' placeholder='entrer nom film' onChange={setText(e.target.value)}/>
      <button onClick={ setNewFilms(filmList.filter(el=>el.name.indexOf(text)!==-1))}
              >search</button>
        
       { newFilms.map(el=>(
               <div className="flex">
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
              </div>))}
          







          
           
           
          



            
       
        </div>
    )
}

export default Film

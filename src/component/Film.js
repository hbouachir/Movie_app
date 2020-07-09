import React from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import ReactStars from "react-rating-stars-component"


function Film({filmList,setKeyword,keyword,setFilmList,newFilms,setNewFilms}) {
 

    return (
      <div className="film">
        
 <input className="gate"  type="text" placeholder="entrer nom film" onChange={(e)=>setKeyword(e.target.value)} />
 
 
      <button onClick={()=>setNewFilms(filmList.filter(el=>el.Name.includes(keyword))) }
              >search</button>
        
<br/>
      <div className="flex">
        { newFilms.map(el=>(
          
               <div className="sub">
               <Card style={{ width: '18rem'}}>
                <Card.Img className='img' variant="top" src={el.URL} />
                <Card.Body>
                  <Card.Title>{el.Name}</Card.Title>
                  <Card.Text>
                  <ReactStars
                    count={5}
                    value={el.Rate}
                    onChange={e=>{console.log(e)}}
                  size={24}
                 half={true}
               emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            color2={"#ffd700"}
  />,
                    
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              </div>
              
              ))}  
              </div>
          
           
           
          



            
       
        </div>
    )
}

export default Film
  /* <ReactStars
                      count={5}
                      initialRating={el.Rate}
                      size={24}
                      color2={"#ffd700"}
                    />*/
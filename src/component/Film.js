import React , {useState} from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import StarRatingComponent from 'react-star-rating-component';
import '../App.css';
import ReactStars from "react-rating-stars-component";



function Film({filmList,setKeyword,keyword,setFilmList,newFilms,setNewFilms}) {
  const [rate,setRate]=useState(1)
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };


    return (
     
      <div className="film">
        
 <input className="gate"  type="text" placeholder="entrer nom film" onChange={(e)=>setKeyword(e.target.value)} />
 
 
      <button onClick={()=>setNewFilms(filmList.filter(el=>el.Name.includes(keyword)&&el.Rate>=rate)) }
              >search</button>
              <ReactStars
    count={5}
    value={rate}
    onChange={ratingChanged}
    size={24}
    color2={"#ffd700"}
  />
        
<br/>
      <div className="flex">
        { newFilms.map(el=>(
          
               <div className="sub">
               <Card style={{ width: '20rem', height:'100%'}}>
                <Card.Img className='img' variant="top" src={el.URL} />
                <Card.Body>
                  <Card.Title>{el.Name}</Card.Title>
                  <Card.Text>
                  <StarRatingComponent 
                    name="rate2" 
                    starCount={5}
                    value={el.Rate}
                  />
                  
                    
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
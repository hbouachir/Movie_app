import React,{useState} from 'react';
import Model from './component/Model';
import Header from './component/Header';
import Carrousel from './component/Carrousel'
import Film from './component/Film';
import './App.css';

function App() {
  const [keyword,setKeyword]=useState('')
    const [filmList,setFilmList]=useState([{Name:'Bik n3ich',URL:'https://fr.web.img6.acsta.net/pictures/20/06/03/10/54/1336029.jpg',Rate:'5'},{Name:'Dachra',URL:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLNKhEZBMwH0ZDA5aiDqFxAXqIdz4kB1m2rQ&usqp=CAU',Rate:'5'},{Name:'harry potter',URL:'https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg',Rate:'3'}])

  const [newFilms,setNewFilms]=useState(filmList)

  return (
    <div className="App">
      <Header/>
      <Carrousel filmList={filmList}/>
      <Model  filmList={filmList} setFilmList={x=>setFilmList(x)} newFilms={newFilms} setNewFilms={x=>setNewFilms(x)} />
      <Film filmList={filmList} setKeyword={x=>setKeyword(x)} newFilms={newFilms} setNewFilms={x=>setNewFilms(x)}  setFilmList={x=>setFilmList(x)} keyword={keyword}/>
      
      
          





    </div>
  );
}

export default App;

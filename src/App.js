import React,{useState} from 'react';
import Model from './component/Model';
import Film from './component/Film';
import Chercher from '/component/Chercher'
import './App.css';

function App() {
  const [film,setFilm]=useState([]);
  const [filmList,setFilmList]=useState([])
  return (
    <div className="App">
      <Model film={film} setFilm={x=>setFilm(x)} filmList={filmList} setFilmList={x=>setFilmList(x)} />
      <Film filmList={filmList}/>
    </div>
  );
}

export default App;

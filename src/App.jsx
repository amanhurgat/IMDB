import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Watchlist from './Pages/Watchlist/watchlist';
import Navbar from './Components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);
  let [watchlist,setWatchlist]=useState(getWatchListFromStorage());
  const [isMovieWatchlisted,setWatchlistvar]=useState(false);

  

  useEffect(()=>{
    localStorage.setItem("watchList",JSON.stringify(watchlist));
  },[watchlist])

  const addTOWatchlist=(movie)=>{
    setWatchlist([...watchlist,movie]);
  }
  const removeFromWatchlist=(movie)=>{
    console.log("Hello");
    const newWatchlist=watchlist.filter((mov)=>{
      return mov.id!==movie.id;
    });
    setWatchlist([...newWatchlist]);
  }

  function getWatchListFromStorage(){

    const watchListFromStorage = JSON.parse(localStorage.getItem("watchList"));

    if(watchListFromStorage==null){
      return [];
    }

    return watchListFromStorage;

  }

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home watchlist={watchlist} addTOWatchlist={addTOWatchlist} removeFromWatchlist={removeFromWatchlist}/>}></Route>
          <Route path='/watchlist' element={<Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist}/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

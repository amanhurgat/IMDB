import Spinner from "../../Common/Spinner/Spinner";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";
import Pagination from "../Pagination/Pagination";


function Movies(props){
    const [isLoading,setLoading]=useState(true);
    const [movies,setMovies]=useState([]);
    const [pageNumber,setPageNumber]=useState(1);

    let watchlist=props.watchlist;


    function prevPageFunction(){
        if(pageNumber>1)
            setPageNumber(pageNumber-1);
    }

    function nextPageFunction(){
        console.log("next");
        setPageNumber(pageNumber+1);
    }

    const addTOWatchlist=props.addTOWatchlist;
    const removeFromWatchlist=props.removeFromWatchlist;
    
    const fetchMovie=async()=>{
        const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e&page=${pageNumber}`);
        let movies = res.data.results;
        setMovies(movies);
        setLoading(false);
    }
    useEffect(()=>{
        fetchMovie();
    },[pageNumber]);
    if(isLoading){
        return <Spinner/>
    }
    return <>
        <h1 className="text-xl text-gray">Trending Movies</h1>
        <div className="flex flex-wrap gap-8 justify-evenly align-center mt-5">
        {
            movies.map((movie)=>{
                return <MovieCard key={movie.id} obj={movie} watchlist={watchlist} addTOWatchlist={addTOWatchlist} removeFromWatchlist={removeFromWatchlist}/>
            })
        }
        </div>
        <Pagination pageNumber={pageNumber} prevPageFunction={prevPageFunction} nextPageFunction={nextPageFunction}/>
    </>
}

export default Movies;
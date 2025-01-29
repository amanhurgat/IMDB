import { useEffect, useState } from "react";
import axios from 'axios';

function Banner(){
    async function getMovieData(){
        const response=await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e");
        const ind=getRandomInt(0,19)
        const movie=response.data.results[ind];
        let moviePoster=movie.backdrop_path;
        let movieTitle=movie.title;
        setImage(`https://image.tmdb.org/t/p/original/${moviePoster}`);
        setTitle(movieTitle);
    }

    useEffect( ()=>{
        getMovieData();
    },[])

    const [bannerImage,setImage]=useState("https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_1280.png")
    const [title,setTitle]=useState("")
    return <div className="h-[75vh] bg-cover bg-center flex items-end justify-center text-white" style={{backgroundImage:`url(${bannerImage})`}}>
        {title}
    </div>

}

function getRandomInt(min, max) {
    //Will return a number inside the given range, inclusive of both minimum and maximum
    //i.e. if min=0, max=20, returns a number from 0-20
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

export default Banner;
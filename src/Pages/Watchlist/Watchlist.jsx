import { useEffect, useState } from "react";
import configuration from './configuration.jsx'

function Watchlist(props){
    const watchlist=props.watchlist;
    const removeFromWatchlist=props.removeFromWatchlist;
    const genreSet=new Set();
    const [movies,setMovies]=useState(watchlist);
    const [searchValue,setSearchValue]=useState("");
    useEffect(()=>{
        setMovies(watchlist)
    },[watchlist]);
    movies.forEach((movie)=>{

        const genreIds = movie.genre_ids;

        genreIds.forEach((id)=>{
                    genreSet.add(configuration[id]);
        })
    });

    const genres = Array.from(genreSet);
    genres.unshift("All Genres");

    function handleSearchField(e){
        const searchFieldValue=e.target.value;
        setSearchValue(searchFieldValue);
        if(e.target.value===""){

        }
        const filteredMovies=watchlist.filter((currMovie)=>{
            return currMovie.title.toLowerCase().startsWith(searchFieldValue.toLowerCase());
        });
        setMovies(filteredMovies);

    }


    return <div>
    {
        <div className="flex justify-center m-4">

            {

                genres.map((genre)=>{
                    return <div className="mx-4 bg-blue-400 h-[3rem] w-[9rem] flex justify-center items-center rounded-xl text-white font-bolder " > {genre} </div>
                })

            }

        </div> 

    }
        <div className="my-18">
            <input onChange={handleSearchField} value={searchValue} type="text" placeholder="Search Movie" className="h-[3rem] w-[20rem] border"></input>
        </div>
        <div>
            <table className="my-10 w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Popularity</th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((movie)=>{
                            return <tr className="my-20">

                                <td className="flex items-center">
                                    <img className="h-[10rem] w-[12rem] object-fit" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                                    <div className="px-10 font-medium">  {movie.title} </div>
                                </td>

                                <td>
                                    {movie.vote_average}
                                </td>
                                <td>
                                    {movie.popularity}
                                </td>
                                <td>
                                    { configuration[movie.genre_ids[0]] } 
                                </td>

                                <td onClick={()=>removeFromWatchlist(movie)}  className="text-red-500">
                                    Delete
                                </td>

                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
}

export default Watchlist;
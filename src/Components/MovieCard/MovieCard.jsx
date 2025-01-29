

function MovieCard(props){
    const movieObj=props.obj;
    const addTOWatchlist=props.addTOWatchlist;
    const removeFromWatchlist=props.removeFromWatchlist;
    let watchlist=props.watchlist;
    let isMovieWatchlisted=watchlist.find((watchlistmovie)=>{
        return watchlistmovie.id===movieObj.id;
    });
    let moviePoster =  movieObj.backdrop_path;
    let movieTitle = movieObj.title;
    const moviePosterUrl = `url(https://image.tmdb.org/t/p/original/${moviePoster})`;
    return <div className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl flex flex-col justify-between items-end hover:scale-110 duration-300 rounded hover:cursor-pointer "
    style={{backgroundImage:moviePosterUrl}} >
        {
            (!isMovieWatchlisted) ? <div onClick={() => addTOWatchlist(movieObj)} className="bg-gray">&#128525;</div> : <div onClick={()=>removeFromWatchlist(movieObj)} className="bg-gray">&#10060;</div>
        }
        <div className="text-xl text-white bg-gray-900 bg-opacity-60 text-center w-full" >
            {movieTitle}
        </div>
    </div>

}

export default MovieCard;
import Banner from "../../Components/Banner/Banner";
import Movies from "../../Components/Movies/Movies";

function Home(props){
    const addTOWatchlist=props.addTOWatchlist;
    const removeFromWatchlist=props.removeFromWatchlist;
    const watchlist=props.watchlist;
    return <>
        <Banner/>
        <Movies addTOWatchlist={addTOWatchlist} removeFromWatchlist={removeFromWatchlist} watchlist={watchlist}/>
    </>
}

export default Home;
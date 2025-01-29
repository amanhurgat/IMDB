import { Link } from "react-router-dom";
import Logo from "./social.png";
import { Navigate } from "react-router-dom";
import Watchlist from "../../Pages/Watchlist/watchlist";

import { BrowserRouter } from 'react-router-dom'

function Navbar(){
    return <div className="flex space-x-7 items-center">
        <BrowserRouter>
            <Link to={'/'}>
                <img className="w-[50px]" src={Logo}/>
            </Link>
            <Link className="text-blue-500 text-3xl font-bold" to={'/'}>
                Movies
            </Link>
            <Link className="text-blue-500 text-3xl font-bold" to={'/watchlist'}>
                Watchlist
            </Link>
        </BrowserRouter>
    </div>
}

export default Navbar;
import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";

function NowPlayingMovie(){
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`

    //membuat state movie
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        getNowPlayingMovies();
    },[])

    async function getNowPlayingMovies(){
        //fetch data
        const response = await axios(URL);

        //simpan data ke state
        setMovies(response.data.results)
    }


    return(
        <div>
            <Hero />
            <Movies title="Now Playing" movies={movies} />
        </div>
    )
}

export default NowPlayingMovie;
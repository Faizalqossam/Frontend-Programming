import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";

function TopRatedMovie(){
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        getTopRatedMovies();
    },[])

    async function getTopRatedMovies(){
        //fecth data dengan axios
        const response = await axios(URL);

        //simpan data ke state
        setMovies(response.data.results)
    }

    return(
        <div>
            <Hero />
            <Movies title="Top Rated" movies={movies} />
        </div>
    )
}

export default TopRatedMovie;
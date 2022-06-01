import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies"

function PopularMovie(){
    //simpan api_key dan url ke variable
    const API_KEY = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

    //membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        getPopularMovies();
    },[])

    async function getPopularMovies(){
         //fecth data dengan axios
        const response = await axios(url);

        //simpan data ke state movie
        setMovies(response.data.results)
    }

    return(
        <div>
            <Hero />
            <Movies title="Popular Movies" movies={movies} />
        </div>
    )
}

export default PopularMovie;
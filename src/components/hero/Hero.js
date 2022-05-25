/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero(){
    //membuat state movie
    const [movie,setMovies]  = useState("")

    async function fetchMovie(){
        //melakukan side effect: fetch data movie (api);
        const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590")

        const data = await response.json()
        
        //set movie dengan data movie hasil fetch
        setMovies(data)
    }

    useEffect(fetchMovie ,[])
    console.log(movie);

    return(
        <StyledHero>
            <section>
                <div>
                    <h2>{movie.Title}</h2>
                    <h4>{movie.Genre}</h4>
                    <p>{movie.Plot}</p>
                    {/* <button className={styles.hero__button}>Watch</button> */}
                    <Button variant='secondary' size="md">Watch</Button>
                </div>
                <div>
                    <img src={movie.Poster} alt="placeholder" />
                </div>
            </section>
        </StyledHero>
    )
}

export default Hero;
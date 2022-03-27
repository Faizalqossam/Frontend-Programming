import Movie from "../movie/Movie";
import styles from "./Movies.module.css"
//import data movies
import data from "../../utils/constants/data";
import {useState} from "react";
import {nanoid} from "nanoid";

function Movies(){
    //membuat state movies
    const [movies,setMovies] = useState(data);

    //membuat function handleevent
    function handleClick(){
        const movie = {
            id: nanoid(),
            title: "Memento",
            year:2021,
            type:"Movie",
            poster:"https://picsum.photos/300/400"
        }

        //menjalankan fungsi setMovies
        //tambahkan movie kedalam movies
        //menggunakan spread operator : copy data array
        setMovies([...movies, movie])
    }

    return(
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Latest Movies</h2>
                <div className={styles.movie__container}>
                {/**
                 * Looping Movie Map. 
                 * Render Component Movie.
                 * Kirim Props Movie.*/}
                {movies.map(function(movie){
                    return <Movie key={movie.id} movie={movie} />
                })
                }
                {}
                </div>
                <button onClick={handleClick} >Add Movie</button>
            </section>
        </div>
    )
}

export default Movies;
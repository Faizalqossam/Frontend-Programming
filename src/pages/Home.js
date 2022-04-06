import Footer from "../components/footer/Footer";
import AddMovieForm from "../components/form/AddMovieForm/AddMovieForm";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import Navbar from "../components/navbar/Navbar";
import {useState} from "react"
import data from "../utils/constants/data";

function Home(){
    const [movies,setMovies] = useState(data);

    return(
        <div>
            <Navbar/>
                <Hero/>
                <Movies movies={movies} setMovies={setMovies}/>
                <AddMovieForm  movies={movies} setMovies={setMovies}/>
            <Footer/>
        </div>
    )
}

export default Home;
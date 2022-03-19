import Footer from "../components/footer/Footer";
import AddMovieForm from "../components/form/AddMovieForm/AddMovieForm";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import Navbar from "../components/navbar/Navbar";

function Home(){
    return(
        <div>
            <Navbar/>
                <Hero/>
                <Movies/>
                <AddMovieForm/>
            <Footer/>
        </div>
    )
}

export default Home;
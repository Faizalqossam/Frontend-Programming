import styles from "./AddMovieForm.module.css"
import {useState} from "react"
import {nanoid} from "nanoid"
import Alert from "../../alert/Alert"

const AddMovieForm = (props) =>{
    const {movies,setMovies} = props;

    //buat variable state 
    const [title,setTitle] = useState("")  
    const [date,setDate] = useState("")
    const [genre,setGenre] = useState("")
    const [img,setImg] = useState("")

    //buat state untuk error title dan date
    const [isTitleError,setIsTitleError] = useState(false)
    const [isDateError,setIsDateError] = useState(false)
    const [isGenreError,setIsGenreError] = useState(false)
    const [isImgError,setIsImgError] = useState(false)

    //membuat function handleTitle
    function handleTitle(e){
        //setTitle  dengan nilai baru : yang telah di input
        setTitle(e.target.value)
    }

    function handleDate(e){
        //setTitle  dengan nilai baru : yang telah di input
        setDate(e.target.value)
    }

    function handleType(e){
        setGenre(e.target.value)
    }

    function handleImg(e){
        setImg(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();

        //jika title kosong
        if(title === ""){
            setIsTitleError(true);
        }
        //jika date kosong
        else if(date === ""){
            setIsDateError(true)
        }
        //jika type kosong
        else if(genre === ""){
            setIsGenreError(true)
        }
        //jika type kosong
        else if(img === ""){
            setIsImgError(true)
        }
        //jika keduanya tidak kosong,push movie dan set error jadi false
        else{
            const movie = {
                id: nanoid(),
                title: title,
                year: date,
                type: genre,
                poster: img,
    
            }
    
            setMovies([...movies,movie])

            //set error jadi false
            setIsTitleError(false)
            setIsDateError(false)
            setIsGenreError(false)
            setIsImgError(false)

        }
    }

    return(
        <div className={styles.container}>
            <section className={styles.AddMovieForm}>
                <div className={styles.AddMovieForm__left}>
                    <img className={styles.AddMovieForm__image} 
                    src="https://picsum.photos/400/300" alt="placeholder" />
                </div>
                <div className={styles.AddMovieForm__right}>
                    <h2 className={styles.AddMovieForm__title}>Add Movie</h2>

                    <form onSubmit={handleSubmit} className={styles.AddMovieForm__form}>
                            <label className={styles.AddMovieForm__label}
                            htmlFor="">Title</label><br/>
                            <input className={styles.AddMovieForm__input} 
                            type="text"
                            //memberikan value input : title 
                            value={title} 
                            //membuat event onChange
                            onChange={handleTitle}
                            />{isTitleError && <Alert>Title wajib Diisi</Alert>}
                            <br/>
                            <label  className={styles.AddMovieForm__label} 
                            htmlFor="">Year</label><br/>
                            <input className={styles.AddMovieForm__input} 
                            type="text"
                            //memberikan value input : date
                            value={date}
                            //memberikan event onChange
                            onChange={handleDate}
                            />{isDateError && <Alert>Date wajib Diisi</Alert>} 
                            <br />
                            <label className={styles.AddMovieForm__label} htmlFor="">Genre</label>
                            <br />
                            <select className={styles.AddMovieForm__input} value={genre} onChange={handleType}>
                                <option className={styles.AddMovieForm__option} value="Horror">Horror</option>
                                <option className={styles.AddMovieForm__option} value="Action">Action</option>
                                <option className={styles.AddMovieForm__option} value="Comedy">Comedy</option>
                                <option className={styles.AddMovieForm__option} value="Romance">Romance</option>
                            </select>{isGenreError && <Alert>Genre wajib Diisi</Alert>} 
                            <br />
                            <label className={styles.AddMovieForm__label} htmlFor="">Image</label><br />
                            <input className={styles.AddMovieForm__input} 
                            type="text" 
                            value={img}
                            onChange={handleImg}/>{isImgError && <Alert>Image wajib Diisi</Alert>}
                            <br />
                            <button className={styles.AddMovieForm__button}><p>Submit</p></button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;
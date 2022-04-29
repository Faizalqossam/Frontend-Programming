//Import CSS Module
//Disimpan di variable styles
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar(){
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={styles.navbar__left}>
                    <h1 className={styles.navbar__brand}>Movie App</h1>
                </div>
                <div className={styles.navbar__right}>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                            <Link className={styles.navbar__link} to="/">Home</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link className={styles.navbar__link} to="/movie/create">Add Movie</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link className={styles.navbar__link} to="/movie/popular">Popular</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link className={styles.navbar__link} to="/movie/now">Now Playing</Link>
                        </li>
                        <li className={styles.navbar__item}>
                            <Link className={styles.navbar__link} to="/movie/top">Top Rated</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
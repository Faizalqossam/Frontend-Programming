//Import CSS Module
//Disimpan di variable styles
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
                        <li className={styles.navbar__item}>Home</li>
                        <li className={styles.navbar__item}>Add Movie</li>
                        <li className={styles.navbar__item}>Popular</li>
                        <li className={styles.navbar__item}>Now Playing</li>
                        <li className={styles.navbar__item}>Top Rated</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
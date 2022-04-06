import styles from "./Hero.module.css"

function Hero(){
    return(
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <h4 className={styles.hero__genre}>Genre: Thriller, Drama ,Romance</h4>
                    <p className={styles.hero__description}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Non suscipit id harum corrupti sequi! Ut recusandae quas natus dolor blanditiis?
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} 
                    src="https://picsum.photos/500/400" alt="placeholder" />
                </div>
            </section>
        </div>
    )
}

export default Hero;
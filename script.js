/**
 * Membuat Component Hello
 * Componen merende  element-element html
 */
function Hello(props){ //bisa destructing di parameter {name}
    //diluar dari return adalah javascript biasa
    //menangkap props
    const {name, major, age} = props
    // const major = "Informatics";

    //didalam return adalah jsx
    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {name} - Jurusan {major} - Umur {age} - Frontend Engineer</p>
        </div>
    )
}

/**
 * Membuat Component Header
 * Menampilkan navigasi
 */
function Header(){
    return(
            <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </nav>
    )
}

/**
 * 
 * Membuat Component Main
 * Menampilkan Konten Utama
 */
function Main(){
    return(
        <main>
            <Hello name="Faiz" major="Informatics" age="20"/>
            <Hello name="Fidel" major="Informatics" age="20"/>
            <Hello name="Fadli" major="Informatics" age="21"/>
            <Hello name="Faza" major="Informatics" age="19"/>
            <Hello name="Fawwaz" major="Informatics" age="18"/>
        </main>
    )
}

/**
 * Membuat Component Footer
 * Menampilkan Footer
 */
function Footer(){
    return(
        <footer>
            <h2>Copyright faizallew</h2>
            <p>Crated by React.js</p>
        </footer>
    )
}

/**
 * Membuat element
 */
const elementHeading = <h1>Hai semua</h1>

/**
 * Membuat Component utama untuk menyatukan component-compnent 
 */
function App(){
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

/**
 * Render Component Hello ke Html
 */
ReactDOM.render(<App />,document.getElementById("root"))
import Hello from "./Hello";

/**
 * 
 * Membuat Component Main
 * Menampilkan Konten Utama
 */
const Main = () =>{
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

export default Main;
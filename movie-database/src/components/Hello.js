/**
 * Membuat Component Hello
 * Componen merender element-element html
 */
const Hello = ({name, major, age}) =>{

    // const {name, major, age} = props

    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {name} - Jurusan {major} - Umur {age} - Frontend Engineer</p>
        </div>
    )
}

export default Hello;

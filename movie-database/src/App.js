import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

/**
 * Membuat Component utama untuk menyatukan component-compnent 
 */
const App = () => {
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
export default App;

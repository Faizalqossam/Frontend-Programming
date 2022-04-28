import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import Home from './pages/Home';
import CreateMovie from './pages/movie/Create';
import NowPlayingMovie from './pages/movie/NowPlaying';
import PopularMovie from './pages/movie/Popular';
import TopRatedMovie from './pages/movie/TopRated';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/create" element={<CreateMovie />} />
          <Route path="/movie/top" element={<TopRatedMovie />} />
          <Route path="/movie/now" element={<NowPlayingMovie />} />
          <Route path="/movie/popular" element={<PopularMovie />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

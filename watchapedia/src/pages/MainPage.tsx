
import Footer from '../components/Footer';
import Header from '../components/Header';
import PopularSection from '../features/movie/popular';
import LatestMovieSection from '../features/movie/latest';
import NowPlayingSection from '../features/movie/nowPlaying';

const MainPage: React.FC =()=>{
  return(
    <>
      <Header/>
      <LatestMovieSection />
      <NowPlayingSection/>
      <PopularSection/>
      <Footer/>
    </>
  )
} 

export default MainPage;

import Footer from '../components/Footer';
import Header from '../components/Header';
import TopRateSection from '../features/movie/topRate';
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
      <TopRateSection/>
      <Footer/>
    </>
  )
} 

export default MainPage;
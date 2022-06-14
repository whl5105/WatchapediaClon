import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LatestMovieSection from '../features/movie/latest';

const MainPage: React.FC =()=>{
  return(
    <>
      <Header/>
      {/* <Slider/> */}
      <LatestMovieSection />
      <Footer/>
    </>
  )
} 

export default MainPage;
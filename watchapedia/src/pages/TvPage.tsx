//-- Styled
import styled from '@emotion/styled';

//-- Layout
import Header from '../components/Header';
import Footer from '../components/Footer';

//-- Features Component
// tv
import LatestTvSection from '../features/tv/latest';
import AiringTodayTvSection from '../features/tv/airingToday';
import OnTheAirTvSection from '../features/tv/onTheAir';
import PopularTvSection from '../features/tv/popular';
import ToRateTvSection from '../features/tv/topRate';


const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;


const TvPage: React.FC =()=>{
  return(
    <>
    <Header/>
    <Main>
      <Container>
        <LatestTvSection/>
        <AiringTodayTvSection/>
        <OnTheAirTvSection/>
        <PopularTvSection/>
      <ToRateTvSection/>
      </Container>
    </Main>
    <Footer/>
    </>

  )
} 

export default TvPage;
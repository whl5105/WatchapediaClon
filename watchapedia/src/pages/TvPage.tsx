import LatestTvSection from '../features/tv/latest';
import AiringTodayTvSection from '../features/tv/airingToday';
import OnTheAirTvSection from '../features/tv/onTheAir';

const TvPage: React.FC =()=>{
  return(
    <>
      <LatestTvSection/>
      <AiringTodayTvSection/>
      <OnTheAirTvSection/>
    </>

  )
} 

export default TvPage;
import LatestTvSection from '../features/tv/latest';
import AiringTodayTvSection from '../features/tv/airingToday';
import OnTheAirTvSection from '../features/tv/onTheAir';
import PopularTvSection from '../features/tv/popular';

const TvPage: React.FC =()=>{
  return(
    <>
      <LatestTvSection/>
      <AiringTodayTvSection/>
      <OnTheAirTvSection/>
      <PopularTvSection/>
    </>

  )
} 

export default TvPage;
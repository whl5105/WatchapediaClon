import LatestTvSection from '../features/tv/latest';
import AiringTodayTvSection from '../features/tv/airingToday';

const TvPage: React.FC =()=>{
  return(
    <>
    <LatestTvSection/>
    <AiringTodayTvSection/>
    </>

  )
} 

export default TvPage;
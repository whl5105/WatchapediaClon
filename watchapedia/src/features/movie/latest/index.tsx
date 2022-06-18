//-- Styled
import styled from '@emotion/styled';

//-- Components
import Card from '../../../components/Card';

//-- Data
import useLatestMovie from './useLatestMovie';

const Base = styled.div`
  margin-bottom: 42px;
`;
const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const PopularSection: React.FC = () => {
  const { data: latestMovieResponse, isLoading } = useLatestMovie();

  const getYear = (release_date: string) => release_date.split('-')[0] || '';

  console.log(latestMovieResponse);
  return (
    <Base>
      <Title>최근 개봉작</Title>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          latestMovieResponse?.data && (
            <Card
              key={latestMovieResponse.data.id}
              linkUrl={`/movie/${latestMovieResponse.data.id}`}
              title={latestMovieResponse.data.title}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}${latestMovieResponse.data.poster_path}`}
              voteAverage={latestMovieResponse.data.vote_average}
              year={getYear(latestMovieResponse.data.release_date)}
            />
          )
        )
      }
    </Base>
  )
}

export default PopularSection;
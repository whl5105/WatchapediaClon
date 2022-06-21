//-- Styled
import styled from '@emotion/styled';

//-- Components
import Card from '../../../components/Card';

//-- Data
import useLatestTv from './useLatestTv';


const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const LatestTvSection: React.FC = () => {
  const { data: latestTvResponse, isLoading } = useLatestTv();

  const getYear = (release_date: string) => release_date.split('-')[0] || '';

  return (
    <Base>
      <Title>최근</Title>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          latestTvResponse?.data && (
            <Card
              key={latestTvResponse.data.id}
              linkUrl={`/tv/${latestTvResponse.data.id}`}
              title={latestTvResponse.data.name}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${latestTvResponse.data.poster_path}`}
              voteAverage={latestTvResponse.data.vote_average}
              year={getYear(latestTvResponse.data.last_air_date)}
            />
          )
        )
      }
    </Base>
  )
}

export default LatestTvSection;
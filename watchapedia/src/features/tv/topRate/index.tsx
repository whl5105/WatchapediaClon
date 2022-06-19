//-- Styled
import styled from '@emotion/styled';

//-- Components
import Card from '../../../components/Card';
import Slider from '../../../components/Slider';

//-- Data
import useToRateTv from './useToRateTV';


const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const ToRateTvSection: React.FC = () => {
  const { data: toRateTvResponse, isLoading } = useToRateTv();

  const getYear = (release_date: string) => release_date.split('-')[0] || '';

  return (
    <Base>
    <Title>인기 상영작</Title>
    {
      isLoading ? (
        <div>Loading...</div>
      ) : (
        <Slider>
          {
            toRateTvResponse?.data?.results.map(tv => (
              <Card
                key={tv.id}
                linkUrl={`/tv/${tv.id}`}
                title={tv.name}
                posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${tv.poster_path}`}
                voteAverage={tv.vote_average}
                year={getYear(tv.first_air_date)}
              />
            ))
          }
        </Slider>
      )
    }
  </Base>
  )
}

export default ToRateTvSection;
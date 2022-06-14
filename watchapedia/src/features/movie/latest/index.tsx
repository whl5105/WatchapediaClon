import styled from '@emotion/styled';
import Card from '../../../components/Card';
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



const LatestMovieSection: React.FC = () => {
  const {data, isLoading } = useLatestMovie();

  const getYear = (date:string) => date.split('-')[0];
  return (
    <Base>
      <Title>최근 개봉작</Title>
      {
        isLoading || !data ? (
          <div>Loading</div>
        ):(
          // <div>
          //   {data?.data.title}
          // </div>
          <Card 
            linkUrl={`/movie/${data.data.id}`}
            title = {data.data.title} 
            posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}`} // 이미지 url 
            voteAverage ={data.data.vote_average} //평점
            year={getYear(data.data.release_date)}
          />
        )
      }
    </Base>
  )
}


export default LatestMovieSection;
import { useQuery } from "react-query";
import { AxiosResponse , AxiosError } from "axios";

import { ListResponse , Movie} from './../../types/index';

import { searchApi } from "../../apis/movieApi";

const useMovieDetail = (query: string) => {
  const queryFn = () => searchApi(query);

  return useQuery<AxiosResponse<ListResponse<Movie>>, AxiosError>(
    ["searchMovie", query],
    queryFn,
    { enabled: Boolean(query) }
  );
};

export default useMovieDetail;

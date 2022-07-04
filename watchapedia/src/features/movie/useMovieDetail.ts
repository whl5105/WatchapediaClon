import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";

import { MovieDetail } from "./../../types/index";

import { detailApi } from "../../apis/movieApi";

const useMovieDetail = (id: string) => {
  const queryFn = async() => await detailApi(id);

  return useQuery<AxiosResponse<MovieDetail>, AxiosError>(
    ["movieDetail", id],
    queryFn,
    { enabled: Boolean(id) }
  );
};

export default useMovieDetail;

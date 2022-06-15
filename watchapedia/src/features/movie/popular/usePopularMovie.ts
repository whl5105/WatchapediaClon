import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { MovieDetail, ListResponse } from "../../../types";

//-- API
import { popularApi } from "../../../apis/movieApi";

const usePopularMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "popularMovie",
    popularApi
  );
};

export default usePopularMovie;

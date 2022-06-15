import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { upcomingApi } from "../../../apis/movieApi";
import { MovieDetail, ListResponse } from "../../../types";

const useTopRateMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "upcomingMovie",
    upcomingApi
  );
};

export default useTopRateMovie;

import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { MovieDetail, ListResponse } from "../../../types";

//-- API
import { upcomingApi } from "../../../apis/movieApi";

const useTopRateMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "upcomingMovie",
    upcomingApi
  );
};

export default useTopRateMovie;

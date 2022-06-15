import { useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

import { MovieDetail, ListResponse } from "../../../types";

//-- API
import { topRatedApi } from "../../../apis/movieApi";

const useTopRateMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "topRateMovie",
    topRatedApi
  );
};

export default useTopRateMovie;

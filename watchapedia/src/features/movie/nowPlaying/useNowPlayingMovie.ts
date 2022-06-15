import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";

import { ListResponse, MovieDetail } from "./../../../types";

//-- API
import { nowPlayingApi } from "../../../apis/movieApi";

const useNowPlayingMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
    "nowPlayingMovie",
    nowPlayingApi
  );
};
export default useNowPlayingMovie;

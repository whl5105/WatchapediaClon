import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";

import { topRatedApi } from "../../../apis/tvApi";
import { ListResponse, TVDetail } from "../../../types";

const useToRateTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(
    "topRateTv",
    topRatedApi
  );
};

export default useToRateTv;

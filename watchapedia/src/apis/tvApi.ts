import axiosInstance from '.';

// 최근 상영작
export const latestApi = () => axiosInstance.get('/tv/latest');
// 오늘 상영한 프로그램
export const airingTodayApi = () => axiosInstance.get('/tv/airing_today');
// 현재 상영중인 프로그램
export const onTheAirApi = () => axiosInstance.get('/tv/on_the_air');
// 인기있는 프로그램 
export const popularApi = () => axiosInstance.get('/tv/popular');
// 탑 랭크 프로그램
export const topRatedApi = () => axiosInstance.get('/tv/top_rated');
// 프로그램 상세정보
export const detailApi = (id: string) => axiosInstance.get(`/tv/${id}`);
// 유사한 프로그램 목록 
export const similarApi = (id: string) => axiosInstance.get(`/tv/${id}/similar`);
// 프로그램 검색 
export const searchApi = (query: string) => axiosInstance.get(`/search/tv?query=${query}`);
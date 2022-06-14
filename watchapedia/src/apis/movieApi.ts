import axiosInstance from '.';

// 최근 상영작 
export const latestApi = () => axiosInstance.get('/movie/latest');
// 개봉 예정작 
export const upcomingApi = () => axiosInstance.get('/movie/upcoming');
// 현재 상영작
export const nowPlayingApi = () => axiosInstance.get('/movie/now_playing');
// 탑랭크 영화목록 
export const topRatedApi = () => axiosInstance.get('/movie/top_rated');
// 인기 상영작 
export const popularApi = () => axiosInstance.get('/movie/popular');
// 영화 상세
export const detailApi = (movieId: string) => axiosInstance.get(`/movie/${movieId}`);
// 비슷한 영화목록 
export const similarApi = (id: string) => axiosInstance.get(`/movie/${id}/similar`);
// 영화 검색 
export const searchApi = (query: string) => axiosInstance.get(`/search/movie?query=${query}`);

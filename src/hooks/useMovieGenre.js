import { useQuery } from '@tanstack/react-query'
import api from '../utils/api';

const fetchMovieGenre = () => {
  return api.get(`/genre/movie/list`)
}

export const useMovieGenreQuery = () => {
  return useQuery({
    queryKey : ['movie-genre'],
    queryFn : fetchMovieGenre,
    select:(result) => result.data.genres,
    staleTime:3000000, // 5분동안은 페이지 이동해도 자주 호출 안댐, 캐시데이터에 들어있는 데이터 가져옴
});
}
//장르는 업데이트가 자주 이뤄지는 데이터가 아님 한번 결저되면 데이터 계속 유지됨
//그래서 api를 자주 호출해줄 필요가 없다.
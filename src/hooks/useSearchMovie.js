import { useQuery } from '@tanstack/react-query'
import api from '../utils/api';
const fetchSearchMovie=({keyword, page})=>{
  return keyword
  ? api.get(`/search/movie?query=${keyword}&page=${page}`)
  : api.get(`/movie/popular?page=${page}`) // 검색창에 keyword값이 있다면 그 keyword 값 보여주고 없다면 popular movie데이터를 가져오겠다는 것 

}

export const useSearchMovieQuery = ({keyword, page}) => {
  return useQuery({
    queryKey:['movie-search', {keyword, page}], // 키워드에 따라서 쿼리가 즉 url이 달라지니 keyword별 유니크한 queryKey를 만들어야한다
    queryFn: () => fetchSearchMovie({keyword, page}),
    select: (result) => result.data,
  })
}
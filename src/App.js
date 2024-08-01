import logo from './logo.svg';
import './App.css';
import AppLayout from './layout/AppLayout';
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
// 홈페이지 /
// 영화 전체보여주는 페이지 (서치) /movies
// 영화 디테일 페이지 /movies/:id
//1) 뮤비 관련 페이지 여러개 만들기
// 추천 영화 /movies/:id/recommandation
// 리뷰 /movies/:id/revies

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='movies'> 
          <Route index element={<MoviePage/>}/>
          <Route path=":id" element={<MovieDetailPage/>}/>
        </Route>
        {/* <Route path='/movies' element={<MoviePage/>}/>
        <Route path='/movies/:id' element={<MovieDetailPage/>}/> */}
      </Route>

      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
      
    
  ); // applayout은 레이아웃 페이지 따로 설정한것 위에 헤더바를 유동적으로 변경하는 스타일 주기 위함
} //이 layout은 3개의 페이지에서 사용될것 그래서 applayout으로 route사용해서 3개의 페이지를 묶은 것
// Route index 이건 AppLayout path ="/"의 부모의 path 값을 그대로 사용하겠다는 뜻이다. 
// path == 
{/* <Route path='movies'> 
          <Route index element={<MoviePage/>}/> //이건 서브 라우터들
          <Route path=":id" element={<MovieDetailPage/>}/> //이건 서브 라우터들
        </Route> */}
        //이건 path경로가 movies인 것들을 정렬해놓은 것 가독성 좋음 영화관련 사이트 모아놓은것
        //notfoundpage는 유저가 엉뚱한 url로 들어갔다면 notfoundpage보여줌면 됨 그리고
        //layout도 지정 밖에 있어서 적용안됨
        export default App;

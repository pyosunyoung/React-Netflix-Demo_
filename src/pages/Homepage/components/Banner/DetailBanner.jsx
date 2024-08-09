import React, { useState } from 'react';
import './Banner.style.css';
import MyVerticallyCenteredModal from '../Modal/MyVerticallyCenteredModal';
import Button from 'react-bootstrap/esm/Button';

const DetailBanner = ({data}) => {
  const [modalShow, setModalShow] = useState(false);
  
  console.log(data);
  // 데이터가 로드되었을 때 처리
  

    return (
      <div style={{
        backgroundImage:"url(" + `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.poster_path}` + ")"
      }}
      className='banner'
      >
      <div className='text-white banner-text-area'>
        <h1>{data?.title}</h1> 
        <p>{data?.overview}</p>
        <Button variant="primary" onClick={() => setModalShow(true)}>
        ▶재생
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={data?.id}
      />
      </div>
      
    </div>
  );
};

export default DetailBanner;

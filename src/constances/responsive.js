// 고정되어있는 값들을 따로 컴포넌트화 한것

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,

  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,

  }
};
import { GlobalStyle } from '../../style/global';
import * as S from './App.styled';
import Slide1 from '../slides/slide1/slide1';
import { useEffect } from 'react';
import { useState } from 'react';
import Slide2 from '../slides/slide2/slide2';
import Slide3 from '../slides/slide3/slide3';
import { limitNumberWithinRange } from '../../utils/utils';

const PAGE_WIDTH = 1024;

function App() {
  const [offSet, setOffSet] = useState(0);
  const [page, setPage] = useState(0);

  let x1 = null;

  const handleTouchStart = (e) => {
    x1 = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const x2 = e.changedTouches[0].clientX;
    const dy = x2 - x1;
    if (dy > 100 || dy < -100) {
      if (dy > 0) {
        setPage(limitNumberWithinRange(page - 1));
      } else {
        setPage(limitNumberWithinRange(page + 1));
      }
    }
  };

  useEffect(() => {
    setOffSet(page * PAGE_WIDTH);
  }, [page]);

  return (
    <S.Container
      className='App'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
      <S.Window>
        <S.Slider
          style={{
            transform: `translateX(-${offSet}px)`,
          }}>
          <Slide1 setPage={setPage} />
          <Slide2 setPage={setPage} />
          <Slide3 setPage={setPage} />
        </S.Slider>
      </S.Window>

      <GlobalStyle />
    </S.Container>
  );
}

export default App;

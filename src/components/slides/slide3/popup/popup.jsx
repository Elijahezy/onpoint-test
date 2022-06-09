/* eslint-disable no-unused-vars */
import * as S from './popup.styled';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { limitNumberWithinRange } from '../../../../utils/utils';
import { POPUP_DATA } from '../../../../consts/consts';

function PopUpSlider() {
    const [page, setPage] = useState(1);
    const [firstContent, setFirstContentIndex] = useState(POPUP_DATA[0]);
    const [lastContentIndex, setLastContentIndex] = useState(POPUP_DATA[POPUP_DATA.length - 1]);

    const contentPerPage = 3;


    const handleRightPagination = () => {
        setPage(limitNumberWithinRange(page + 1, 1, 2));
    }

    const handleLeftPagination = () => {
        setPage(limitNumberWithinRange(page - 1, 1, 2));
    }

    useEffect(() => {
        const lastContent = page * contentPerPage;
        setLastContentIndex(page * contentPerPage);
        setFirstContentIndex(lastContent - contentPerPage);
    }, [page]);

    return (
        <S.Container>
            {POPUP_DATA.map((item, index) => <div key={index}><S.Order>{item.order}</S.Order><S.Text>{item.text}</S.Text></div>).slice(firstContent, lastContentIndex)}

            <S.SliderContainer>
                <MdKeyboardArrowLeft size={30} color='#272727' onClick={handleLeftPagination} />
                {new Array(page === 2 ? 1 : 0).fill('').map((item, index) => <S.SliderDotEmpty key={index} />)}
                {new Array(1).fill('').map((item, index) => <S.SliderDot key={index} />)}
                {new Array(page < 2 ? 1 : 0).fill('').map((item, index) => <S.SliderDotEmpty key={index} />)}
                <MdKeyboardArrowRight size={30} color='#272727' onClick={handleRightPagination} />
            </S.SliderContainer>
        </S.Container>
    );
}

export default PopUpSlider
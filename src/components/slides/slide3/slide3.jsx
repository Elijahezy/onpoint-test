/* eslint-disable react/prop-types */
import * as S from './slide3.styled';
import * as G from '../global.styled';
import { VscHome } from 'react-icons/vsc';
import { ITEMS_SLIDE3 } from '../../../consts/consts';
import { useState } from 'react';
import Feature from './feature/feature';
import PopUpSlider from './popup/popup';



function Slide3({ setPage }) {

    const [isPopUp, setIsPopUp] = useState(false);

    const handleHomeClick = () => {
        setPage(0);
    }

    return (
        <S.Container>
            <G.Container onClick={handleHomeClick}>
                <VscHome color='#282828' size='2.5vh' />
                <G.Separator />
                <G.Name>PROJECT</G.Name>
            </G.Container>
            <S.InnerContainer isPopUp={isPopUp}>
                {isPopUp ? <S.XButton onClick={() => setIsPopUp(!isPopUp)} /> : null}

                <S.SubTitle>{isPopUp ? 'ПРЕИМУЩЕСТА' : 'КЛЮЧЕВОЕ СООБЩЕНИЕ'}</S.SubTitle>
                <S.Title>BREND<strong>XY</strong></S.Title>
                {isPopUp ? <PopUpSlider /> :
                    <Feature setIsPopUp={setIsPopUp} isPopUp={isPopUp} />
                }
            </S.InnerContainer>
            <S.BackgroundImg bg={isPopUp ? '#16273e' : ''} />
            {ITEMS_SLIDE3.map((item, index) => <G.BgItem key={index} src={item.src} item={item} />)}
            <G.Logo />
        </S.Container>
    );
}

export default Slide3
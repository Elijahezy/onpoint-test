/* eslint-disable react/prop-types */
import * as S from './slide1.styled';
import * as G from '../global.styled';
import { VscHome } from 'react-icons/vsc';
import { ITEMS_SLIDE1 } from '../../../consts/consts';

function Slide1({ setPage }) {

    const handleHomeClick = () => {
        setPage(0);
    }

    const handleNextClick = () => {
        setPage(1);
    }
    return (

        <S.Container >
            <G.Container onClick={handleHomeClick}>
                <VscHome color='#282828' size='2.5vh' />
                <G.Separator />
                <G.Name>PROJECT</G.Name>

            </G.Container>
            <S.SubTitle>ПРИВЕТ,</S.SubTitle>
            <S.Title>ЭТО <strong>НЕ</strong></S.Title>
            <S.Title>КОММЕРЕЧЕСКОЕ</S.Title>
            <S.TitleContainer>
                <S.Title>ЗАДАНИЕ</S.Title>
                <S.Button onClick={handleNextClick} />

            </S.TitleContainer>

            <S.BackgroundImg />
            <G.Logo />
            {ITEMS_SLIDE1.map((item, index) => <G.BgItem key={index} src={item.src} item={item} />)}
        </S.Container>
    );
}

export default Slide1
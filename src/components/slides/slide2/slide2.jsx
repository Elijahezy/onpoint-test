/* eslint-disable react/prop-types */
import * as S from './slide2.styled';
import * as G from '../global.styled';
import { VscHome } from 'react-icons/vsc';
import { ITEMS_SLIDE2, LOREM } from '../../../consts/consts';

function Slide2({ setPage }) {

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
            <S.SubTitle>ТЕКСТ <br /> СООБЩЕНИЯ</S.SubTitle>
            <S.TextContainer className='scroll'>
                <S.TextContainerInner>
                    <S.Text>
                        {LOREM}
                    </S.Text>
                </S.TextContainerInner>
            </S.TextContainer>

            <S.BackgroundImg />
            {ITEMS_SLIDE2.map((item, index) => <G.BgItem key={index} src={item.src} item={item} />)}
            <G.Logo />
        </S.Container>
    );
}

export default Slide2
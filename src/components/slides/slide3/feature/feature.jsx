/* eslint-disable react/prop-types */
import * as S from '../slide3.styled';


function Feature({ setIsPopUp, isPopUp }) {
    return (
        <>
            <S.Text1Container>
                <S.Text1>
                    Ehicula ipsum a arcu
                    cursus vitae. Eu non
                    diam phasellus
                    vestibulum lorem sed
                    risus ultricies
                </S.Text1>
                <S.Icon1 src='/img/slide3/icon1.png' />
            </S.Text1Container>
            <S.Text2Container>
                <S.Text2>
                    A arcu<br />
                    cursus vitae
                    <S.Icon2 src='/img/slide3/icon2.png' />
                </S.Text2>
                <S.Button onClick={() => setIsPopUp(!isPopUp)} />
            </S.Text2Container>
        </>
    );
}

export default Feature;
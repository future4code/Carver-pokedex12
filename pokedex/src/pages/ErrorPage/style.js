import styled from 'styled-components'

export const DivContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 80vw;
    overflow-y: hidden;
    overflow-x: hidden;
h1, h2, h3{
    width: 100%;
    text-align: center;
    margin-left: 15vw;
    color: #F45921;
    &:hover{
    transform: scale(1.2);
    transition: .5s ease-in-out;
    }
}
`
export const ImgPika = styled.img`
    width: 50vw;
`
export const ImgBackHome = styled.img`
    display: flex;
    margin-left: 31vw;
    width: 8vw;
    &:hover{
    transform: scale(1.2);
    transition: .5s ease-in-out;
    cursor: pointer;
    }
`
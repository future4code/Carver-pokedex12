import styled from 'styled-components'

export const DivCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    /* grid-template-columns: 1fr 1fr 1fr; */
`

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 50px;
    background-color: #CCC;
    border-radius:100% 47% 46% 54% / 46% 47% 54% 54% ;
    &:hover{
        transform: scale(1.1);
        transition: .3s ease-in-out;
    }
    img{
        width: 150px;
    }
`
export const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`

export const Img = styled.img`
display: flex;
align-items: center;
justify-content: center;
margin: auto;
margin-top: 15vw;
`
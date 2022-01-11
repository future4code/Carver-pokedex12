import styled from 'styled-components'

export const MainContainer = styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 20px;
    h3{
        display: flex;
        width: 90%;
        justify-content: flex-start;
        text-transform: uppercase;
    }
    &:hover{
        transform: scale(1.1);
        transition: .2s ease-in-out;
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

export const DivImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d4d4d4;
    width: 100%;
    height: 270px;
    border-radius: 10px;
`

export const ButtonCardLeft = styled.button`
    border: none;
    height: 40px;
    border-radius: 5px;
    font-weight: bold;
    color: #000;
    background-color: #9BCC50;
    margin-right: 8px;
    cursor: pointer;
    
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    overflow: hidden;
    &::after {
        content: "";
        
        background-color: hsla(0, 0%, 100%, 0.2);
        position: absolute;
        top: -50%;
        bottom: -50%;
        width: 1.25em;
        transform: translate3d(-525%, 0, 0) rotate(35deg);
    }
    &:hover::after {
        transition: transform 0.45s ease-in-out;
        transform: translate3d(200%, 0, 0) rotate(35deg);
    }
`
export const ButtonCardRight = styled.button`
    border: none;
    height: 40px;
    border-radius: 5px;
    font-weight: bold;  
    color: #fff;
    background-color: #B97FC9;
    cursor: pointer;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    outline: none;
    overflow: hidden;
    &::after {
        content: "";
        background-color: hsla(0, 0%, 100%, 0.2);
        position: absolute;
        top: -50%;
        bottom: -50%;
        width: 2.5em;
        transform: translate3d(-525%, 0, 0) rotate(35deg);
    }
    &:hover::after {
        transition: transform 0.45s ease-in-out;
        transform: translate3d(200%, 0, 0) rotate(35deg);
    }
`
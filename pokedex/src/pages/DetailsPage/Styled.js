import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
h1{
    margin-top: 100px;
    text-align: center;
    text-transform: uppercase;
}
img{
    width: 150px;
    margin-bottom: 5vw;
    &:hover{
        transform: scale(1.1);
        transition: .3s ease-in-out;
    }
} 
`

export const DivInfoText = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    div{
        width: 70%;
        max-width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 20px;
        @media screen and (max-device-width : 480px) {
            width: 100%;
    }

    }
    h2{
        cursor: pointer;
    } 
`

export const Img = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerInfo = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    margin-top: 5vw;
    margin: 0 100px;
    @media screen and (max-device-width : 480px) {
            margin: auto;
    }
`
export const Hability = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80vw;
    max-width: 1200px;
    height: 325px;
    margin: auto;
    background-color: #9BCC50;
    box-shadow: 1px 1px 10px 1px #000;
    border-radius: 10px;
    @media screen and (max-device-width : 480px) {
            width: 100vw;
            margin: auto;
    }
    div{
        overflow: auto;
        ::-webkit-scrollbar {
        width: 10px;
        }
        ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0px #000; 
        border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
        background: #B97FC9; 
        border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
        background: #FBCC45; 
        }
        @media screen and (max-device-width : 480px) {
            width: 100vw;
    }
    }
`

export const Stats = styled.div`
    width: 80vw;
    max-width: 1200px;
    margin: auto;
    background-color: #9BCC50;
    box-shadow: 1px 1px 10px 1px #000;
    border-radius: 10px;
    @media screen and (max-device-width : 480px) {
            width: 100vw;
    }
`

export const Type = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    max-width: 1200px;
    margin: auto;
    background-color: #9BCC50;
    box-shadow: 1px 1px 10px 1px #000;
    border-radius: 10px;
    @media screen and (max-device-width : 480px) {
            width: 100vw;
    }
    p{
        text-transform: uppercase;
        font-weight: 500;
        padding: 15px;
        width: 100px;
        background-color: #FBCC45;
        border-radius: 10px;
    }
`

export const DivStats = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    p{
        width: 145px;
        text-transform: uppercase;
    }
`

export const DivBarrerStats = styled.div`
    background-color: #ccc;
    border-radius: 15px;
    height: 10px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    div{
        width: 150%;
    }
`

export const RenderHability = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 47%;
    max-width: 200px;
    margin: auto;
    :hover{
            background-color: #FBCC45;
            border-radius: 10px;
        }
p{
    display: flex;
    align-items: center;
    height: 3px;
    text-transform: uppercase;
    font-weight: 500;
}
`
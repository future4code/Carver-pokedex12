import styled from 'styled-components'

export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

h1{
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
`
export const Hability = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 300px;
    height: 500px;
    border-radius: 9% 0% 0% 11% / 10% 8% 8% 10%;
    div{
        border-radius: 9% 0% 0% 11% / 10% 8% 8% 10%;
        background-color: #30A7D7;
        overflow: auto;
        ::-webkit-scrollbar {
    width: 5px;
    }
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #000; 
    border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
    background: #ff0000; 
    border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #FE3D31; 
    }
    }
    

`

export const Stats = styled.div`
    width: 28vw;
    max-width: 500px;
    background-color: #30A7D7;
    border-radius: 0% 10% 10% 0% / 10% 10% 10% 10%;
    border-left: 3px solid #FF0000;
`

export const Type = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 500px;
    background-color: #30A7D7;
    border-radius: 0% 10% 10% 0% / 10% 10% 10% 10%;
    border-left: 3px solid #FF0000;
    p{
        text-transform: uppercase;
        font-weight: 500;
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
        width: 180%;
    }
`

export const RenderHability = styled.div`
p{
    height: 3px;
    text-transform: uppercase;
    font-weight: 500;
}
`
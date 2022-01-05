import styled from 'styled-components'

export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

h1{
    text-align: center;
}
img{
    width: 180px;
    &:hover{
        transform: scale(1.3);
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
height: 200px;
padding: 20px;
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

`

export const Stats = styled.div`


`

export const Type = styled.div`

`
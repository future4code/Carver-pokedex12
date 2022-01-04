import styled from 'styled-components'
import Toolbar from '@mui/material/Toolbar'


export  const StyledToolbar = styled(Toolbar)`
    background-color: #000000;
    color: #F5EDED;
`
export const MenuContent = styled.div`
background-color: #000;
display: flex;
align-items: center;
width: 100vw;
`
export const PokedexIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
img{
    background-color: transparent;
    width: 60px;
    height: 60px;
}
&:hover{
    img{
    background-color: transparent;
    transform: scale(1.2);
    transition: .5s ease-in-out;
    cursor: pointer;
    }
}

`
export const Title = styled.div`
display: flex;
align-items: center;
width: 100vw;
&:hover{
    color: #FE3D31;
}
`
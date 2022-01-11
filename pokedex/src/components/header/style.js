import styled from 'styled-components'
import Toolbar from '@mui/material/Toolbar'

export const StyledToolbar = styled(Toolbar)`
    background-color: #30A7D7;
    color: #F5EDED;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
    
`

export const MenuContent = styled.div`
    background-color: #30A7D7;
    display: flex;
    align-items: center;
    width: 100vw;
`

export const PokedexIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #30A7D7;

    img{
        background-color: transparent;
        width: 60px;
        height: 60px;
        margin-right: 15px;
}
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    position: relative;

    &:hover{
        color: #FE3D31;
    }
`

export const DivEmpt = styled.div`
    height: 10px;
    width: 350px;
`
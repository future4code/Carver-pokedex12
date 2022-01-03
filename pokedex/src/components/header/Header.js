import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from './img/Logo.png'


import * as C from './style'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <C.StyledToolbar>
          <C.MenuContent>

           <C.PokedexIcon>
           <img src={Logo}/>
           <Button variant="string" style={{color: '#D72323'}} size='string'>Pokedex</Button>
           </C.PokedexIcon>
          </C.MenuContent>
          <C.Title>
            <h2>Lista de Pokemons</h2>
          </C.Title>
        </C.StyledToolbar>
      </AppBar>
    </Box>
  );
}
export default Header
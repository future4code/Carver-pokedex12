import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from './img/Logo.png'
import LogoPokedex from './img/LogoPokedex.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as C from './style'

const Header = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('Pokedex')
  const [logo, setLogo] = useState(Logo)

  function goPokedex(){
    if(title === 'Pokedex'){
      navigate('/pokedex')
      setTitle('Lista de Pokemons')
      setLogo(LogoPokedex)
    } else{
      navigate('/')
      setTitle('Pokedex')
      setLogo(Logo)
    }
  }
  
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <C.StyledToolbar>
          <C.MenuContent>

           <C.PokedexIcon>
           <img src={logo}/>

           <Button 
           onClick={goPokedex}
            variant="string" 
           style={{color: '#D72323'}} 
           size='string'>{title}
           </Button>
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
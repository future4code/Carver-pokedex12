import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from '../img/Logo.png'
import LogoPokedex from '../img/LogoPokedex.png'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

import * as C from './style'

const Header = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('Pokedex')
  const [logo, setLogo] = useState(Logo)

  function goToHome() {
    navigate('/')
    setLogo(Logo)
  }

  function goToPokedex() {
    navigate('pokedex')
    setLogo(LogoPokedex)
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <C.StyledToolbar>
          <C.MenuContent>

            <C.PokedexIcon>
              <img src={logo} />

              <Button
                onClick={goToHome}
                variant="string"
                style={{ color: '#D72323' }}
                size='string'>Home
              </Button>

              <Button
                onClick={goToPokedex}
                variant="string"
                style={{ color: '#D72323' }}
                size='string'>Pokedex
              </Button>
            </C.PokedexIcon>

          </C.MenuContent>
          <C.Title>
            <h2>Lista de Pokemons</h2>
          </C.Title>

          <C.DivEmpt>
                <p></p>
          </C.DivEmpt>
        </C.StyledToolbar>
      </AppBar>
    </Box>
  );
}
export default Header
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from '../img/Logo.png'
import LogoPokedex from '../img/LogoPokedex.png'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import { GlobalStateContext } from '../../global/GlobalContext';

import * as C from './style'

const Header = () => {
  const navigate = useNavigate()
  const [logo, setLogo] = useState(Logo)
  const [namePage, setNamePage] = useState('Lista de Pokemons')
  const { buttons } = useContext(GlobalStateContext)

  function goToHome() {
    navigate('/')
    setLogo(Logo)
    setNamePage('Lista de Pokemons')
    buttons.setVariant('text')
    buttons.setVariant1('contained')
    buttons.setColor1('success')
  }

  function goToPokedex() {
    navigate('pokedex')
    setLogo(LogoPokedex)
    setNamePage('Pokedex')
    buttons.setVariant('contained')
    buttons.setVariant1('text')
    buttons.setColor('success')
  }

  return (
    <Box >
      <AppBar position="static">
        <C.StyledToolbar>
          <C.MenuContent>
            <C.PokedexIcon>
              <img src={logo} />
              <Button
                onClick={goToHome}
                variant={buttons.variant1}
                color={buttons.color1}
                style={{ color: '#FFF' }}
                size='string'>Home
              </Button>

              <Button
                onClick={goToPokedex}
                color={buttons.color}
                variant={buttons.variant}
                style={{ color: '#FFF' }}
                size='string'>Pokedex
              </Button>
            </C.PokedexIcon>

          </C.MenuContent>
          <C.Title>
            <h2> {namePage}</h2>
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
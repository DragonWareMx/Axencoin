import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './styles/style.css'

import Logo from './assets/Logopequeno.png'
import { Footer } from '../Footer'

const Layout = ({ children }) => {
  return (
    // <ThemeProvider theme={theme}>
    <div className="layout-container">
      <AppBar position="static" color='transparent' sx={{ boxShadow: "none" }}>
        <Container>
          <Toolbar sx={{ justifyContent: "center" }}>
            <Link to='/'>
              <img src={Logo} alt="Logo" className='logo-header' />
            </Link>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }} className='nav-links-container'>
              <Button
                component={NavLink}
                sx={{ textTransform: "none" }}
                style={isActive => ({ color: isActive.isActive ? "#0071ce" : "white" })}
                to="/panel"
              >
                Panel
              </Button>
              <Button
                component={NavLink}
                sx={{ textTransform: "none" }}
                style={isActive => ({ color: isActive.isActive ? "#0071ce" : "white" })}
                to="/compra"
              >
                Compra AXN
              </Button>
              <Button
                component={NavLink}
                sx={{ textTransform: "none" }}
                style={isActive => ({ color: isActive.isActive ? "#0071ce" : "white" })}
                to="/cuenta"
              >
                Cuenta
              </Button>
              <Button
                component={NavLink}
                sx={{ textTransform: "none" }}
                style={isActive => ({ color: isActive.isActive ? "#0071ce" : "white" })}
                to="/calculadora"
              >
                Calculadora
              </Button>
              <Button
                component={NavLink}
                sx={{ textTransform: "none" }}
                style={isActive => ({ color: isActive.isActive ? "#0071ce" : "white" })}
                to="/documentos"
              >
                Documentos
              </Button>
            </Box>
            <Button
              variant="contained"
              size='large'
            >
              Desconectar
            </Button>
          </Toolbar>
          <div className='polygon-layout'>Axen</div>
          <div className='bolita'></div>
        </Container>
      </AppBar>

      <Container style={{ paddingBottom: 60 }}>
        <Outlet />
      </Container>

      <Footer />
    </div>
    // </ThemeProvider>
  )
}

export default Layout
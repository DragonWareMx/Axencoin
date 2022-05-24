import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import { borderRadius, createTheme, ThemeProvider } from '@mui/system'
import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import './styles/style.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

const Layout = ({children}) => {
  return (
    // <ThemeProvider theme={theme}>
    <div className="layout-container">
        <AppBar position="static" color='transparent' sx={{boxShadow: "none"}}>
          <Container>
            <Toolbar sx={{justifyContent: "center"}}>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button
                  component={NavLink}
                  sx={{textTransform: "none"}} 
                  style={isActive => ({color: isActive.isActive ? "#0071ce" : "white"})}
                  to="/panel"
                 >
                  Panel
                </Button>
                <Button
                  component={NavLink}
                  sx={{textTransform: "none"}} 
                  style={isActive => ({color: isActive.isActive ? "#0071ce" : "white"})}
                  to="/compra"
                >
                  Compra AXN
                </Button>
                <Button
                  component={NavLink}
                  sx={{textTransform: "none"}} 
                  style={isActive => ({color: isActive.isActive ? "#0071ce" : "white"})}
                  to="/cuenta"
                >
                  Cuenta
                </Button>
                <Button
                  component={NavLink}
                  sx={{textTransform: "none"}} 
                  style={isActive => ({color: isActive.isActive ? "#0071ce" : "white"})}
                  to="/calculadora"
                >
                  Calculadora
                </Button>
                <Button
                  component={NavLink}
                  sx={{textTransform: "none"}} 
                  style={isActive => ({color: isActive.isActive ? "#0071ce" : "white"})}
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
        
        <Container>
          <Outlet />
        </Container>
    </div>
    // </ThemeProvider>
  )
}

export default Layout
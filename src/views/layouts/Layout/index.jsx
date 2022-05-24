import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import { borderRadius } from '@mui/system'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div>
      <div>
        <AppBar position="static">
          <Container>
            <Toolbar>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button component={Link} sx={{textTransform: "none"}} color="inherit" to="/panel">
                  Panel
                </Button>
                <Button component={Link} sx={{textTransform: "none"}} color="inherit" to="/compra">
                  Compra AXN
                </Button>
                <Button component={Link} sx={{textTransform: "none"}} color="inherit" to="/cuenta">
                  Cuenta
                </Button>
                <Button component={Link} sx={{textTransform: "none"}} color="inherit" to="/calculadora">
                  Calculadora
                </Button>
                <Button component={Link} sx={{textTransform: "none"}} color="inherit" to="/documentos">
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
          </Container>
        </AppBar>
      </div>
        <Outlet />
    </div>
  )
}

export default Layout
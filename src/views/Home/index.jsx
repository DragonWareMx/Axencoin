import React from 'react'
import './styles/style.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'

import CardLeft from './assets/BotonComprarAhora.png'
import CardRight from './assets/BotonLeermas.png'
import Logo from './assets/LogoPantalla1.png'
import { Tooltip } from '@mui/material';

export const Home = () => {
    return (
        <div className='container'>
            <div className="logo-container">
                <img src={Logo} alt="Logo" className='home-logo' />
            </div>
            <Container fixed>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6} style={{ paddingTop: 0, display: 'flex', justifyContent: 'center' }}>
                        <div className='card-irregular-container'>
                            <img src={CardLeft} alt="" width={300} />
                            <Link to="/compra">
                                <div className='card-irregular'>
                                    COMPRAR AHORA
                                </div>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ paddingTop: 0, display: 'flex', justifyContent: 'center' }}>
                        <div className='card-irregular-container'>
                            <img src={CardRight} alt="" width={300} />
                            <Link to="/panel">
                                <div className='card-irregular'>
                                    LEER MÁS
                                </div>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
                <Grid style={{ marginTop: 20 }}>
                    <Tooltip title='Si compaste AxenCoin antes, puedes actualizar tu token aquí para seguir obteniendo beneficios.'>
                        <Link to='/swap' className='update-now'>¿Ya actualizaste tu AXENCOIN? Da clic aquí</Link>
                    </Tooltip>
                </Grid>
            </Container>
        </div>
    )
}
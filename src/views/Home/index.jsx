import React from 'react'
import './styles/style.css'
import Axencoin from './assets/moneda-axen-crypto.gif'
import Container from '@mui/material/Container';
import CardLeft from './assets/BotonComprarAhora.png'
import CardRight from './assets/BotonLeermas.png'
import Grid from '@mui/material/Grid';

export const Home = () => {
    return (
        <div className='container'>
            <Container fixed>
                <img src={Axencoin} alt="Axencoin" className='axencoin-image-rotary' />
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={6} style={{ paddingTop: 0, display: 'flex', justifyContent: 'center' }}>
                        <div className='card-irregular-container'>
                            <img src={CardLeft} alt="" srcset="" width={300} />
                            <div className='card-irregular'>
                                COMPRAR AHORA
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ paddingTop: 0, display: 'flex', justifyContent: 'center' }}>
                        <div className='card-irregular-container'>
                            <img src={CardRight} alt="" srcset="" width={300} />
                            <div className='card-irregular'>
                                LEER MÁS
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
import React from 'react'
import './css.css';
import Grid from '@mui/material/Grid';
import CardLeft from './assets/BotonComprarAhora.png'
import CardRight from './assets/BotonLeermas.png'
import { Container } from '@mui/system';

export const Calculadora = () => {
    return (
        <>
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Grid container spacing={{ xs: 3, md: 7 }}>
                            <Grid item xs={12} >
                                <div className='little-info-container '>
                                    <div className="info-title">Precio AXN</div>
                                    <div className="info-quantity">$ 40.01</div>
                                    <div className='info-divider-gradient'></div>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className='little-info-container '>
                                    <div className="info-title">APY Actual</div>
                                    <div className="info-quantity">63,632.325%</div>
                                    <div className='info-divider-gradient'></div>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className='little-info-container '>
                                    <div className="info-title">Tu Balance AXN</div>
                                    <div className="info-quantity">2.230 AXN</div>
                                    <div className='info-divider-gradient'></div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <div>xs=6</div>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

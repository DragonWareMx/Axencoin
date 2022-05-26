import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CardLeft from '../Panel/assets/BotonComprarAhora.png'
import CardRight from '../Panel/assets/BotonLeermas.png'
import '../Panel/css.css';
import './css.css';

export const Cuenta = () => {
    return (
        <Container fixed>
            <Grid container spacing={{ xs: 2, md: 3 }} sx={{marginBottom: '25px'}} justifyContent="center">

                <Grid item xs={10} md={4}>
                    <div className='data-container'>
                        <img src={CardLeft} alt="" srcSet="" className='data-img'/>
                        <div className='data-irregular'>
                            <div>Your Balance</div>
                            <div className='data-bold'>$0.000</div>
                        </div>
                    </div>
                    
                    <div className='little-info-container'>
                        <div></div>
                        <div>0.000 AXN</div>
                        <div className='custom-divider-gradient'></div>
                    </div>
                </Grid>

                <Grid item xs={10} md={4}>
                    <div className='data-container'>
                        <div className='data-regular'>
                            <div>APY</div>
                            <div className='data-bold'>392,399.622%</div>
                        </div>
                        <div className='custom-divider'></div>
                    </div>
                    
                    <div className='little-info-container extra-margin-top'>
                        <div></div>
                        <div>Daily ROI 1.785%</div>
                        <div className='custom-divider-gradient'></div>
                    </div>
                </Grid>

                <Grid item xs={10} md={4}>
                    <div className='data-container'>
                        <img src={CardRight} alt="" srcSet="" className='data-img'/>
                        <div className='data-irregular'>
                            <div>Next Rebase</div>
                            <div className='data-bold'>00:01:02</div>
                        </div>
                    </div>
                    
                    <div className='little-info-container'>
                        <div></div>
                        <div>You will earn money soon</div>
                        <div className='custom-divider-gradient'></div>
                    </div>
                </Grid>

            </Grid>
            <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
                {/* DATOS */}
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    className="bottom-container"
                >
                    <Grid item container xs={10} sm={8} style={{position: "relative"}}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            align='left'
                        >
                            Current AXN Price
                        </Typography>
                        <div className='polygon-standard-cuenta'>
                            AXEN
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={4}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            sx={{textAlign: {
                                xs: 'right',
                                sm: 'center'
                            }}}
                        >
                            $0.000
                        </Typography>
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    className="bottom-container"
                >
                    <Grid item xs={10} sm={8} style={{position: "relative"}}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            align='left'
                        >
                            Next Reward Amount
                        </Typography>
                        <div className='polygon-standard-cuenta'>
                            AXEN
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={4}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            sx={{textAlign: {
                                xs: 'right',
                                sm: 'center'
                            }}}
                        >
                            0.000 AXN
                        </Typography>
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    className="bottom-container"
                >
                    <Grid item xs={10} sm={8} style={{position: "relative"}}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            align='left'
                        >
                            Next Reward Amount USD
                        </Typography>
                        <div className='polygon-big-cuenta'>
                            AXEN
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={4}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            sx={{textAlign: {
                                xs: 'right',
                                sm: 'center'
                            }}}
                        >
                            0.000 AXN
                        </Typography>
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    className="bottom-container"
                >
                    <Grid item xs={10} sm={8} style={{position: "relative"}}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            align='left'
                        >
                            Next Reward Yield
                        </Typography>
                        <div className='polygon-standard-cuenta'>
                            AXEN
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={4}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            sx={{textAlign: {
                                xs: 'right',
                                sm: 'center'
                            }}}
                        >
                            0.018%
                        </Typography>
                    </Grid>
                </Grid>
                
                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    className="bottom-container"
                >
                    <Grid item xs={10} sm={8} style={{position: "relative"}}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            align='left'
                        >
                            ROI (1-Day Rate) USD
                        </Typography>
                        <div className='polygon-standard-cuenta'>
                            AXEN
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={4}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            sx={{textAlign: {
                                xs: 'right',
                                sm: 'center'
                            }}}
                        >
                            $0.000
                        </Typography>
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    className="bottom-container"
                >
                    <Grid item xs={10} sm={8} style={{position: "relative"}}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            align='left'
                        >
                            ROI (5-Day Rate)
                        </Typography>
                        <div className='polygon-standard-cuenta'>
                            AXEN
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={4}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            sx={{textAlign: {
                                xs: 'right',
                                sm: 'center'
                            }}}
                        >
                            9.249%
                        </Typography>
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    className="bottom-container"
                    sx={{marginBottom: '50px'}}
                >
                    <Grid item xs={10} sm={8} style={{position: "relative"}}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            align='left'
                        >
                            ROI (5-Day Rate) USD
                        </Typography>
                        <div className='polygon-standard-cuenta'>
                            AXEN
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={4}>
                        <Typography
                            variant="h6"
                            className='font-style'
                            sx={{textAlign: {
                                xs: 'right',
                                sm: 'center'
                            }}}
                        >
                            $0.000
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
}
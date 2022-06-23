import React from 'react';
import './css.css';
import Grid from '@mui/material/Grid';
import CardLeft from './assets/BotonComprarAhora.png'
import CardRight from './assets/BotonLeermas.png'
import { Container } from '@mui/system';


export const Panel = () => {
    return (
        <>
            <Container fixed>
                <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">

                    <Grid item xs={10} md={4}>
                        <div className='data-container'>
                            <img src={CardLeft} alt="" srcSet="" className='data-img'/>
                            <div className='data-irregular'>
                                <div>AXN Price</div>
                                <div className='data-bold'>$96.675</div>
                            </div>
                        </div>
                        
                        {/* <div className='little-info-container'>
                            <div>Backed Liquidity</div>
                            <div>100%</div>
                            <div className='custom-divider-gradient'></div>
                        </div> */}
                    </Grid>

                    <Grid item xs={10} md={4}>
                        <div className='data-container auxiliar-margin-bottom'>
                            <div className='data-regular'>
                                <div>Contract Balance</div>
                                <div className='data-bold'>0 USDT</div>
                            </div>
                            <div className='custom-divider'></div>
                        </div>
                        
                        {/* <div className='little-info-container extra-margin-top'>
                            <div>Next Rebase</div>
                            <div>00:04:16</div>
                            <div className='custom-divider-gradient'></div>
                        </div> */}
                    </Grid>

                    <Grid item xs={10} md={4}>
                        <div className='data-container'>
                            <img src={CardRight} alt="" srcSet="" className='data-img'/>
                            <div className='data-irregular'>
                                <div>Total Supply</div>
                                <div className='data-bold'>0 AXN</div>
                            </div>
                        </div>
                        
                        {/* <div className='little-info-container'>
                            <div>Total Supply</div>
                            <div>4,058,958.910</div>
                            <div className='custom-divider-gradient'></div>
                        </div> */}
                    </Grid>

                </Grid>

                <Grid container justifyContent={'center'}>
                    <Grid xs={10} md={4}>
                        <div className='data-container'>
                            <div className='data-regular'>
                                <div className='next-row-text'>Total Rewards Distr.</div>
                                <div className='data-bold' style={{fontSize:'18px'}}>0 AXN</div>
                            </div>
                            <div className='custom-divider'></div>
                        </div>
                    </Grid>
                </Grid>

                <Grid container alignItems='center' className='auxiliar-margin-top auxiliar-margin-bottom'>

                    <Grid item xs={12} md={4}>
                        <div className='little-info-container'>
                            <div>Daily Auto Compound</div>
                            <div>0.355%</div>
                            <div className='custom-divider-gradient'></div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <div className='little-info-container'>
                            <div>APY</div>
                            <div>365%</div>
                            <div className='custom-divider-gradient'></div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <div className='little-info-container'>
                            <div>Dev Mktg Fee</div>
                            <div>5%</div>
                            <div className='custom-divider-gradient'></div>
                        </div>
                    </Grid>

                </Grid>


                {/* <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">

                    <Grid item xs={10} md={4}>
                        <div className='data-container'>
                            <img src={CardLeft} alt="" srcSet="" className='data-img'/>
                            <div className='data-irregular'>
                                <div className='next-row-text'>Market Value of Treasury Asset</div>
                                <div className='data-bold' style={{fontSize:'18px'}}>$398,137,270.717</div>
                            </div>
                        </div>
                        
                        <div className='little-info-container remove-margin-top'>
                            <div>Daily Auto Compound</div>
                            <div>0.355%</div>
                            <div className='custom-divider-gradient'></div>
                        </div>
                    </Grid>

                    <Grid item xs={10} md={4}>
                    
                        
                        <div className='little-info-container extra-margin-top'>
                            <div>APY</div>
                            <div>365%</div>
                            <div className='custom-divider-gradient'></div>
                        </div>
                    </Grid>

                    <Grid item xs={10} md={4}>
                        <div className='data-container'>
                            <img src={CardRight} alt="" srcSet="" className='data-img'/>
                            <div className='data-irregular'>
                                <div className='next-row-text'>AXN Insurance Fund Value</div>
                                <div className='data-bold' style={{fontSize:'18px'}}>4,719.310</div>
                            </div>
                        </div>
                        
                        <div className='little-info-container'>
                            <div>Dev Mktg Fee</div>
                            <div>5%</div>
                            <div className='custom-divider-gradient'></div>
                        </div>
                    </Grid>

                </Grid> */}
            </Container>
        </>
    )
}

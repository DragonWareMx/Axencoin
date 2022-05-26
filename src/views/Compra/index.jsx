import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import './styles/style.css'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const BuyTextField = styled(TextField)({

});

const BuyButton = styled(Button)({

});    

export const Compra = () => {
    return (
        <Container fixed>
            <Grid container justifyContent="center">
                <Grid item xs={9} md={6}>
                    <div className='buy-container'>
                        <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            direction='row'
                        >
                            <Grid item style={{fontSize:'22px'}}>Swap</Grid>
                            <Grid item>
                                <Grid container>
                                    <div onClick={()=>alert('reset')} className='buy-options'>
                                        <RestartAltIcon/>
                                    </div>
                                    <div onClick={()=>alert('settings')} className='buy-options'>
                                        <SettingsIcon/>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={{textAlign:'left',fontSize:'12px',fontWeight:300}}>FAST, SECURE, KYC-FREE</Grid>
                        <Grid 
                            container
                            justifyContent="center" 
                        >
                            <Grid item xs={11}>
                                <BuyTextField 
                                    fullWidth 
                                    label="From:" 
                                    id="from" 
                                    style={{marginTop:'50px'}}
                                    numeric
                                />
                                <BuyTextField 
                                    fullWidth 
                                    label="From:" 
                                    id="from" 
                                    style={{marginTop:'50px'}}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            direction='row'
                            className='buy-slipText'
                        >
                            <div>Slippage tolerance</div>
                            <div>22%</div>
                        </Grid>
                        <BuyButton variant='contained' className='buy-button'>
                            CANJEAR
                        </BuyButton>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

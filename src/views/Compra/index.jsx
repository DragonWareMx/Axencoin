import { Grid, Tooltip } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import './styles/style.css'
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const BuyTextField = styled(TextField)({
    '& label.Mui-focused': {
        borderRadius:'10px',
        color: 'white',
    },
    '& label':{
        color:'white'
    },
    '& .MuiInput-underline:after': {
    borderRadius:'10px',
    borderBottomColor: 'rgba(50,113,192,0.5)',
    color: 'white'
    },
    '& .MuiOutlinedInput-root': {
        borderRadius:'10px',
        color: 'white',
        '& fieldset': {
          borderColor: 'rgba(0,113,192,0.5)',
          border:'3px solid rgba(0,113,192,0.5)',
        },
        '&:hover fieldset': {
          border:'3px solid rgba(0,113,192,0.5)',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'rgb(0,113,192)',
          border:'3px solid rgb(0,113,220)',
        },
    },
    '& .MuiInputBase-input':{
        borderRadius:'10px',
        fontSize: '20px'
    }
});

const BuyButton = styled(Button)({
  backgroundColor: 'rgb(0,113,192)',
  borderRadius:'8px'
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
                            <Grid item style={{fontSize:'22px'}}>COMPRA</Grid>
                            <Grid item>
                                <Grid container>
                                    {/* <div onClick={()=>alert('reset')} className='buy-options'>
                                        <RestartAltIcon/>
                                    </div>
                                    <div onClick={()=>alert('settings')} className='buy-options'>
                                        <SettingsIcon/>
                                    </div> */}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item style={{textAlign:'left',fontSize:'12px',fontWeight:300}}>RÁPIDO Y SEGURO</Grid>
                        <Grid 
                            container
                            justifyContent="center" 
                        >
                            <Grid item xs={11}>
                                <BuyTextField 
                                    fullWidth 
                                    label="Cantidad en BNB:" 
                                    id="form-field-bnbToBuy" 
                                    style={{marginTop:'50px'}}
                                />
                                <BuyTextField 
                                    fullWidth 
                                    label="Vas a obtener en $AXN:" 
                                    className='hidden'
                                    id="tokenToBuy"
                                    style={{marginTop:'50px'}}
                                    InputProps={{
                                        readOnly: true,
                                      }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <div ></div>
                            </Grid>
                        </Grid>
                        {/* <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            direction='row'
                            className='buy-slipText'
                        >
                            <div>Slippage tolerance</div>
                            <div>22%</div>
                        </Grid> */}
                        <Grid container justifyContent={'space-around'}>
                            <Tooltip title='Si aún no tienes el token AXN en tu wallet, agrégalo aquí.'>
                                <BuyButton variant='contained' className='buy-button addToWallet' style={{backgroundColor:'#020a30'}}>
                                    Agrega $AXN a tu wallet
                                </BuyButton>
                            </Tooltip>
                            <Tooltip title='No olvides agregar el token AXN a tu wallet antes de comprar.'>
                                <BuyButton variant='contained' className='buy-button' id="buyToken">
                                    Compra Axencoin
                                </BuyButton>
                            </Tooltip>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

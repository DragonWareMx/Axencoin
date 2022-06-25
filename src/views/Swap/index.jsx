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

export const Swap = () => {
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
                            <Grid item style={{fontSize:'22px'}}>SWAP YOUR OLD to $AXN</Grid>
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
                                    label="Quantity of Tokens:" 
                                    id="tokenToSwap" 
                                    style={{marginTop:'50px'}}
                                    InputProps={{
                                        readOnly: true,
                                      }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <BuyButton variant='contained' className='buy-button hidden' id="swapToken" style={{backgroundColor:'#020a30'}}>
                            SWAP TOKENS
                        </BuyButton>

                        <BuyButton variant='contained' className='buy-button' id="approveToken" style={{backgroundColor:'#020a30'}}>
                            APPROVE TOKENS
                        </BuyButton>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

import React, { useRef, useState } from 'react'
import './css.css';
import Grid from '@mui/material/Grid';
import Caja from './assets/Caja-maximo-crop.png'
import { Container } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';
import { Tooltip, Typography, Alert } from '@mui/material';

const interes = 0.004219472133
const precioAXN = 1

const CssTextField = styled(TextField)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        backgroundColor: 'transparent',
        border: '0px',
        fontSize: 18,
        width: '120px',
        padding: '10px 15px',
        color: 'white',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '"Montserrat"',
        ].join(','),
    },
    '& .MuiInputAdornment-root .MuiTypography-root': {
        color: 'white',
        fontSize: 15,
        fontFamily: '"Montserrat"',
        paddingRight: 5
    }
}));



export const Calculadora = () => {

    const [values, setValues] = React.useState({
        amount: 0.00,
        apy: 0.3553497461,
        future: 54.91,
        days: 30
    });

    const totalAXNRef = useRef(null)

    const handleChange = (prop) => (event) => {
        
        setValues({ ...values, [prop]: event.target.value });
    };

    //calculo
    const [maxAXN, setMaxAXN] = useState(null)
    const [earnings, setEarnings] = useState("0.000")
    const [potentianReturn, setPotentianReturn] = useState("0.000")

    React.useEffect(() => {
        const newEarnings = values.amount * Math.pow((precioAXN + interes), values.days)
        setEarnings(newEarnings.toLocaleString('es-MX', { minimumFractionDigits: 3 }))
        setPotentianReturn((parseFloat(newEarnings) * 0.95).toLocaleString('es-MX', { minimumFractionDigits: 3 }))
    }, [values, earnings, potentianReturn])
    

    return (
        <>
            <Container fixed>
                <Grid container spacing={3} style={{ marginTop: 20 }}>
                    {/* left column */}
                    <Grid item xs>
                        <Grid container spacing={{ xs: 3, md: 7 }}>
                            <Grid item xs={12} >
                                <div className='little-info-container '>
                                    <div className="info-title">Precio AXN</div>
                                    <div className="info-quantity">$ {precioAXN}</div>
                                    <div className='info-divider-gradient'></div>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className='little-info-container '>
                                    <div className="info-title">APY</div>
                                    <div className="info-quantity">365%</div>
                                    <div className='info-divider-gradient'></div>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <div className='little-info-container '>
                                    <div className="info-title">Tu Balance AXN</div>
                                    <div className="info-quantity" id="totalAXN" ref={totalAXNRef}>0 AXN</div>
                                    <div className='info-divider-gradient'></div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* right column */}
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={{ xs: 2, md: 2 }}>
                            {values.amount < 100 && 
                                <Alert sx={{ background: "rgb(0,0,0,0.5)", color: "white", mt: 2 }} severity="info">
                                    Te recordamos que en cantidades menores a 100 no se activa el motor de recompensas.
                                </Alert>
                            }
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={2} className={'input-container'}>
                                    <Grid item xs={12} md={4} className={'input-text'}>
                                        Monto AXN
                                    </Grid>
                                    <Grid item xs={12} md={8} className={'input-real'}>
                                        <div className="custom-input-container">
                                            <img src={Caja} alt="" />
                                            <FormControl className={'form-control-custom'}>
                                                <CssTextField
                                                    label=""
                                                    type="number"
                                                    variant="standard"
                                                    id="outlined-start-adornment"
                                                    value={values.amount}
                                                    onChange={handleChange('amount')}
                                                    min={100}
                                                    InputProps={{
                                                        endAdornment: 
                                                        <Tooltip title={maxAXN !== null ? "Tu máximo es " + maxAXN : ""} placement="right" >
                                                            <InputAdornment
                                                                position="end"
                                                                style={{ cursor: "pointer" }}
                                                                onClick={(e) => {
                                                                    const totalAXN = totalAXNRef.current?.innerHTML
                                                                    setMaxAXN(parseFloat(totalAXN))
                                                                    setValues({...values, amount: parseFloat(totalAXN)})
                                                                }}
                                                            >
                                                                Máximo
                                                            </InputAdornment>
                                                        </Tooltip>,
                                                        disableUnderline: true,
                                                    }}
                                                />
                                            </FormControl>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                {/* <Grid container className={'input-container'}>
                                    <Grid item xs={12} md={4} className={'input-text'}>
                                        APY (%)
                                    </Grid>
                                    <Grid item xs={12} md={8} className={'input-real'}>
                                        <div className="custom-input-container">
                                            <img src={Caja} alt="" />
                                            <FormControl className={'form-control-custom'}>
                                                <CssTextField
                                                    label=""
                                                    type="number"
                                                    variant="standard"
                                                    id="outlined-start-adornment"
                                                    value={values.apy}
                                                    onChange={handleChange('apy')}
                                                    InputProps={{
                                                        endAdornment: <InputAdornment position="end">Actual</InputAdornment>,
                                                        disableUnderline: true,
                                                    }}
                                                />
                                            </FormControl>
                                        </div>
                                    </Grid>
                                </Grid> */}
                            </Grid>
                            {/* <Grid item xs={12} className="bottom-container">
                                <Grid container className={'input-container'}>
                                    <Grid item xs={12} md={8} className={'input-text'}>
                                        Futuro precio de AXN en el mercado
                                    </Grid>
                                    <Grid item xs={12} md={4} className={'input-real'}>
                                        <div className="custom-input-container">
                                            <img src={Caja} alt="" />
                                            <FormControl className={'form-control-custom'}>
                                                <CssTextField
                                                    label=""
                                                    type="number"
                                                    variant="standard"
                                                    id="outlined-start-adornment"
                                                    value={values.future}
                                                    onChange={handleChange('future')}
                                                    InputProps={{
                                                        endAdornment: <InputAdornment position="end">Actual</InputAdornment>,
                                                        disableUnderline: true,
                                                    }}
                                                />
                                            </FormControl>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid> */}
                            <Grid item xs={12} className="bottom-container">
                                <Grid container className={'input-container'}>
                                    <Grid item xs={3} md={3} className={'input-text'} style={{ paddingTop: 5 }}>
                                        {values.days} {values.days === 1 ? 'día' : 'días'}
                                    </Grid>
                                    <Grid item xs={9} md={9} >
                                        <Slider value={values.days} onChange={(_, newValue) => setValues({ ...values, days: newValue })} onChangeCommitted={(_, newValue) => setValues({ ...values, days: newValue })} min={1} max={365} aria-label="Default" valueLabelDisplay="auto" />
                                    </Grid>
                                    <div className='polygon-slider'>Axen</div>
                                </Grid>
                            </Grid>

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
                                        Tu inversión inicial
                                    </Typography>
                                    <div className='polygon-standard'>
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
                                        ${parseFloat(precioAXN * values.amount).toLocaleString('es-MX', { minimumFractionDigits: 3 })}
                                    </Typography>
                                </Grid>
                            </Grid>

                            {/* <Grid
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
                                        Ganancia actual
                                    </Typography>
                                    <div className='polygon-standard'>
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
                            </Grid> */}

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
                                        Estimación de ganancias de AXN
                                    </Typography>
                                    <div className='polygon-big'>
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
                                        {earnings} AXN
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
                                        Retorno potencial
                                    </Typography>
                                    <div className='polygon-standard'>
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
                                        ${(potentianReturn).toLocaleString('es-MX', { minimumFractionDigits: 3 })}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

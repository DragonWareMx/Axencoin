import React from 'react'
import './styles/style.css'
import { Container, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Moneda from './assets/NewMoneda.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                        {/* <img src={Instagram} alt="Instagram" style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.instagram.com/axencapital/', '_blank', 'noopener,noreferrer')} height={45} />
                        <img src={Facebook} alt="Facebook" style={{ marginLeft: 10, cursor: 'pointer' }} onClick={() => window.open('https://www.facebook.com/AxenCapital/', '_blank', 'noopener,noreferrer')} height={45} /> */}
                        <IconButton color='primary' size='large' onClick={() => window.open('https://www.instagram.com/axencapital/', '_blank', 'noopener,noreferrer')}>
                            <InstagramIcon sx={{ fontSize: 50 }} />
                        </IconButton>

                        <IconButton color='primary' size='large' onClick={() => window.open('https://www.facebook.com/AxenCapital/', '_blank', 'noopener,noreferrer')}>
                            <FacebookOutlinedIcon sx={{ fontSize: 50 }} />
                        </IconButton>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src={Moneda} alt="Logo" height={65} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

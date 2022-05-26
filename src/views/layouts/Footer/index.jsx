import React from 'react'
import './styles/style.css'
import { Container } from '@mui/material'
import Facebook from './assets/IconoFace.png'
import Instagram from './assets/IconoInsta.png'
import Moneda from './assets/NewMoneda.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                    <div style={{ display: 'flex' }}>
                        <img src={Instagram} alt="Instagram" style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.instagram.com/axencapital/', '_blank', 'noopener,noreferrer')} height={45} />
                        <img src={Facebook} alt="Facebook" style={{ marginLeft: 10, cursor: 'pointer' }} onClick={() => window.open('https://www.facebook.com/AxenCapital/', '_blank', 'noopener,noreferrer')} height={45} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <img src={Moneda} alt="Logo" height={65} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

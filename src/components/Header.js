import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className='pageHeader'>
      <h1 className='pageTitle'>Votación para reina de Humboldt 2022</h1>
      <p className='pageDescription'>Seleccioná tu candidata preferida y presioná <strong>ENVIAR</strong>. Una vez enviado el voto no se podrá modificar</p>
    </header>
  )
}

export default Header
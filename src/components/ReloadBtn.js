import React from 'react'
import { useEffect } from 'react'
import './ReloadBtn.css'

function ReloadBtn() {

  useEffect(() => {
    document.querySelector('.infoModalReloadBtn')
      .addEventListener('click', () => {
        window.location.reload();
      }, false)
  })

  return (
    <button className="infoModalReloadBtn">Entendido</button>
  )
}

export default ReloadBtn
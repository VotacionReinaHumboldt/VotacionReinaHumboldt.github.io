import React from 'react'
import { useEffect } from 'react'
import './ReloadBtn.css'

function ReloadBtn({noTime}) {

  useEffect(() => {
    document.querySelector('.infoModalReloadBtn')
      .addEventListener('click', () => {
        window.location.reload();
      }, false)
  })

  return (
    <button className="infoModalReloadBtn" style={{'display': noTime ? 'none' : ''}}>Entendido</button>
  )
}

export default ReloadBtn
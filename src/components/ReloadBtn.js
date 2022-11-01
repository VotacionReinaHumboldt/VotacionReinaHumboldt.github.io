import React from 'react'
import { useEffect } from 'react'
import './ReloadBtn.css'

function ReloadBtn() {

  useEffect(() => {
    document.querySelector('.errorModalReloadBtn')
      .addEventListener('click', () => {
        window.location.reload()
      }, false)
  })

  return (
    <button className="errorModalReloadBtn">Entendido</button>
  )
}

export default ReloadBtn
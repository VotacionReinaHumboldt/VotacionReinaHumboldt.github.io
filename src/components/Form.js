import React from 'react'
import { useContext } from 'react';
import { mailContext } from '../context/mailContext';
import InputCand from './InputCand';
import './Form.css'


function Form() {

  const { mail } = useContext(mailContext);

  const fixMissingMail = () => {
    document.querySelector('.modalBackdrop').style.display = 'block'
    document.querySelector('body').style['overflow-y'] = 'hidden';
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(!mail){fixMissingMail(); return;}
    let formData = new FormData();
    let checkedButton = Object.values(document.querySelectorAll('[name="voto"]'))
                          .filter(el => el.checked)
    formData.append('EMail', mail)
    formData.append('Voto', checkedButton[0].value)
    
    document.querySelector('.infoModalBackdrop').style.display = 'block';
    document.querySelector('.load').style.display = 'block';
    document.querySelector('.infoModalReloadBtn').style.display = 'none';
    document.querySelector('.infoModalText').style.display = 'none';
    document.querySelector('.errorIcon').style.display = 'none';
    document.querySelector('.successIcon').style.display = 'none';

    const serverResponse = await fetch(process.env.REACT_APP_URL, { method: 'POST', body: formData});
    handleServerResponse(serverResponse);
  }

  const handleServerResponse = async (response) => {
    const serverResponseJSON = await response.json();
    console.log(serverResponseJSON);
    if(serverResponseJSON.result === 'error'){

      document.querySelector('.errorIcon').style.display = 'block';

      if(serverResponseJSON.message === 'invalid mail') {
        document.querySelector('.infoModalText').innerHTML = `<p className="infoModalText"><strong>Error: </strong> correo invalido</p>`
        document.querySelector('.infoModalReloadBtn').style.display = 'block';
      } else if(serverResponseJSON.message === 'voted') {
        document.querySelector('.infoModalText').innerHTML =`<p className="infoModalText"><strong>Error: </strong> este correo ya cuenta con un voto registrado</p>`;
        document.querySelector('.infoModalReloadBtn').style.display = 'block';
      } else if (serverResponseJSON.message === 'time exceeded') {
        document.querySelector('.infoModalText').innerHTML =`<strong>Error</strong> el tiempo de votaci??n termin?? ??Gracias a todos por su participaci??n!`;
      }
    } else if (serverResponseJSON.result === 'success') {
      document.querySelector('.successIcon').style.display = 'block';
      document.querySelector('.infoModalText').innerHTML = `<p className="infoModalText"><strong>Voto registrado, </strong>??Muchas gracias por participar!</p> <ReloadBtn />`;
      document.querySelector('.infoModalReloadBtn').style.display = 'block';
    }

    document.querySelector('.infoModalText').style.display = 'block';
    document.querySelector('.load').style.display = 'none';
  }

  return (
    <form
        onSubmit={handleFormSubmit}
        method='POST'
        className='voteForm'
    >
      <InputCand name='Delfina Spehgt' corp='Club Atl??tico Sarmiento' img='/images/imgCandidatas/DelfinaSpehgt.jpg'/>
      <InputCand name='Brisa Emmert' corp='Asociaci??n de Bomberos Voluntarios de Humboldt' img='/images/imgCandidatas/BrisaEmmert.jpg'/>
      <InputCand name='Victoria Quiroga' corp='Biblioteca Beck y Herzog' img='/images/imgCandidatas/VictoriaQuiroga.jpg'/>
      <InputCand name='Valentina R??os' corp='Club Atl??tico Juventud Unida de Humboldt' img='/images/imgCandidatas/ValentinaRios.jpg'/>
      <InputCand name='Malena Ronsoni' corp='Sociedad Italiana' img='/images/imgCandidatas/MalenaRonsoni.jpg'/>
      <InputCand name='Karen Ramirez' corp='SAMCO Humboldt' img='/images/imgCandidatas/KarenRamirez.jpg'/>
      <InputCand name='Yamila L??pez' corp='E.E.T.P. N?? 681 Mercedes ??lvarez de Segura' img='/images/imgCandidatas/YamilaLopez.jpg'/>
      <div className='buttonContainer'>
        <button type='submit' className='submitForm'>Enviar</button>
      </div>
    </form>
  )
}

export default Form
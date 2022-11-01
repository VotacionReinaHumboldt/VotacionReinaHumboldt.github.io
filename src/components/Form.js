import React from 'react'
import { useContext } from 'react';
import { mailContext } from '../context/mailContext';
import InputCand from './InputCand';
import './Form.css'


function Form() {

  const { mail } = useContext(mailContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if(!mail){alert('error'); return;}
    let formData = new FormData();
    let checkedButton = Object.values(document.querySelectorAll('[name="voto"]'))
                          .filter(el => el.checked)
    formData.append('EMail', mail)
    formData.append('Voto', checkedButton[0].value)
    
    document.querySelector('.errorModalBackdrop').style.display = 'block';
    document.querySelector('.load').style.display = 'block';
    document.querySelector('.errorModalReloadBtn').style.display = 'none';
    document.querySelector('.errorModalText').style.display = 'none';

    const serverResponse = await fetch(process.env.REACT_APP_URL, { method: 'POST', body: formData});
    handleServerResponse(serverResponse);
  }

  const handleServerResponse = async (response) => {
    const serverResponseJSON = await response.json();
    console.log(serverResponseJSON);
    if(serverResponseJSON.result === 'error'){
      if(serverResponseJSON.message === 'invalid mail'){
        document.querySelector('.errorModalText').innerHTML = `<p className="errorModalText"><strong>Error: </strong> correo invalido</p>`
        

      } else if(serverResponseJSON.message === 'voted'){
        document.querySelector('.errorModalText').innerHTML =`<p className="errorModalText"><strong>Error: </strong> este correo ya cuenta con un voto registrado</p>`;
        

      }
    } else if (serverResponseJSON.result === 'success'){
      document.querySelector('.errorModalText').innerHTML = `<p className="errorModalText"><strong>Voto registrado, </strong>¡Muchas gracias por votar!</p> <ReloadBtn />`;
      
    }

    document.querySelector('.errorModalText').style.display = 'block';
    document.querySelector('.load').style.display = 'none';
    document.querySelector('.errorModalReloadBtn').style.display = 'block';
  }

  return (
    <form
        onSubmit={handleFormSubmit}
        method='POST'
        className='voteForm'
    >
      <InputCand name='Delfina Spehgt' corp='Club Atlético Sarmiento' img='/images/imgCandidatas/DelfinaSpehgt.jpg'/>
      <InputCand name='Brisa Emmert' corp='Asociación de Bomberos Voluntarios de Humboldt' img='/images/imgCandidatas/BrisaEmmert.jpg'/>
      <InputCand name='Victoria Quiroga' corp='Biblioteca Beck y Herzog' img='/images/imgCandidatas/VictoriaQuiroga.jpg'/>
      <InputCand name='Valentina Ríos' corp='Club Atlético Juventud Unida de Humboldt' img='/images/imgCandidatas/ValentinaRios.jpg'/>
      <InputCand name='Malena Ronsoni' corp='Sociedad Italiana' img='/images/imgCandidatas/MalenaRonsoni.jpg'/>
      <InputCand name='Karen Ramirez' corp='SAMCO Humboldt' img='/images/imgCandidatas/KarenRamirez.jpg'/>
      <InputCand name='Yamila López' corp='E.E.T.P. Nº 681 Mercedes Álvarez de Segura' img='/images/imgCandidatas/YamilaLopez.jpg'/>
      <div className='buttonContainer'>
        <button type='submit' className='submitForm'>Enviar</button>
      </div>
    </form>
  )
}

export default Form
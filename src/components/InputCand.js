import React from 'react';
import './InputCand.css'

function InputCand({name, corp ,img}) {
  
  return (
    <div className="inputDiv">
      <input type='radio' className='input' name='voto' value={name} id={name} hidden></input>
      <label htmlFor={name} className='inputLabel' >
        <div id={`${name}label`}>
          <img src={img} alt={name + 'img'} className="inputImage"/>
          <div className="inputText">
            <p className="inputName">{name}</p>
            <p className="inputCorp">{corp}</p>
          </div>
          
        </div>
      </label>
    </div>
  )
}

export default InputCand
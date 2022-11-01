import React from "react";
import jwt_decode from "jwt-decode";
import { useEffect, useContext } from "react";
import { mailContext } from "../context/mailContext.js";
import './Modal.css';

/*global google*/

export function Modal() {

  const { setMail } = useContext(mailContext);

  useEffect(() => {
    function handleCredentialResponse(response) {
      let data = jwt_decode(response.credential);
      setMail(data.email);
      document.querySelector('.modalBackdrop').style.display= 'none'
      document.querySelector('body').style['overflow-y'] = 'auto';
    }
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLEID,
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large", text: "singin_with", shape: "pill"}  // customization attributes
    );
    
    document.querySelector('.modalBackdrop').style.display = 'block'
    document.querySelector('body').style['overflow-y'] = 'auto';
  }, []);

  return (
    <div className="modalBackdrop"> 
      <div className="modalDiv">
        <div open className="modal">
          <p className="text-center"><strong>Inicia sesión </strong>con Google para continuar</p>
          <div id="buttonDiv" className="loginBtn"></div> 
        </div>
      </div>
    </div>
  );
}

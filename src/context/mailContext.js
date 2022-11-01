import React from 'react'
import { createContext, useState } from 'react';

export const mailContext = createContext();

export function MailContextProvider (props) {

  const [mail, setMail] = useState();
  
  return (
    <mailContext.Provider value={{mail, setMail}}>
      {props.children}
    </mailContext.Provider>
  )
}


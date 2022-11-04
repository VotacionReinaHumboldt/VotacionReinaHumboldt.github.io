import Modal from './components/Modal.js'
import Form from './components/Form.js'
import InfoDialog from './components/InfoDialog.js';
import './App.css';
import Header from './components/Header.js';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if((new Date()) >= (new Date('11/5/22, 22:00:00'))){
    return(
      <InfoDialog noTime={true}/>
    )
  }

  return (
      <div className="App">
        <Header />
        <Form /> 
        <Modal />
        <InfoDialog />
      </div>
  );
}

export default App;

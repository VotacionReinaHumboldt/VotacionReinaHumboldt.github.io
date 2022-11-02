import Modal from './components/Modal.js'
import Form from './components/Form.js'
import InfoDialog from './components/InfoDialog.js';
import './App.css';
import Header from './components/Header.js';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  })

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

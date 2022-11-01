import { Modal } from './components/Modal.js'
import Form from './components/Form.js'
import ErrorDialog from './components/ErrorDialog.js';
import './App.css';
import Header from './components/Header.js';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [])

  return (
      <div className="App">
        <Header />
        <Form /> 
        <Modal />
        <ErrorDialog />
      </div>
  );
}

export default App;

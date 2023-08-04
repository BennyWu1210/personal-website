import { useState } from 'react';
import './App.css';
import Homepage from './components/pages/Homepage';
import NavPage from './components/pages/NavPage';
import NavButton from './shared/NavButton';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [showModal, setShowModal] = useState<Boolean>(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  }

  return (
    <div className="App">
      
      <NavButton showModal={showModal} toggleModal={toggleModal}/>
      <div className='pages'>
        <Homepage />
        {/* Couldn't use a createPortal here..*/}
        <AnimatePresence>{showModal && <NavPage toggleModal={toggleModal}/>} </AnimatePresence>
      </div>
    </div>
  );
}

export default App;

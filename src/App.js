import { useState } from 'react';
import './App.css';
import { BurgerMenu } from './componenst/BurgerMenu/BurgerMenu';
import { Header } from './componenst/Header/Header';
import { Main } from './componenst/Main/Main';

function App() {
  const [show, setShow] = useState(false);

  const showBugreg = (event) => {
    event.preventDefault()
    setShow(true);

  }
  const close = () => {
    setShow(false)
  }

  return (
    <>
      <Header showBugreg={showBugreg}/>
      {show ? <BurgerMenu show={show} close={close}/> : null}
      <Main />
    </>
  );
}

export default App;

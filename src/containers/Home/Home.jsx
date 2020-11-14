import { Carousel } from 'antd';
import { Button } from "arwes";
import './Home.scss';
import React, {useState} from 'react';
import Modal from '../../components/Modal/Modal';
import Login from '../Login/Login';
import Register from '../Register/Register';



const Home = () => {
  function onChange(a) {
    console.log(a);
  }

  
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const showModalRegister = () => {setShowRegister(true);};
  const hideModalRegister = () => {setShowRegister(false);};

  const showModalLogin = () => {setShowLogin(true);};
  const hideModalLogin = () => {setShowLogin(false);};

return(
  <div>
  <div className="imgCarrusel">
    <Carousel dots={false} autoplay={onChange}>
    <div class="imagen1">
    </div>
    <div class="imagen2">
    </div>
    <div class="imagen3">
    </div>
    <div class="imagen4">
    </div>
  </Carousel>
  </div>
    <div className="modals">
    <Button animate onClick={() => {showModalLogin()}}>Login</Button>
    <Modal show={showLogin} handleClose={hideModalLogin} title={'Login'}>
      <Login />
    </Modal>

    <Button animate onClick={() => {showModalRegister()}}>Register </Button>
    <Modal show={showRegister} handleClose={hideModalRegister} title={'Register'}>
      <Register />
    </Modal>
    </div>
  </div>
 );
}

export default Home;
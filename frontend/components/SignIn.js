import styles from '../styles/signin.module.css';
import { useState } from 'react';
import {useSelector} from 'react-redux'
import { Modal, Button } from "antd";

// const signin = useSelector((state) => state.signin.value);

//const signin = useSelector((state) => state.signin.value);


function Signin() {

  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);


  const showModal = () => {
    setIsSigninModalOpen(true);
  };

  const handleOk = () => {
    setIsSigninModalOpen(false);
  };

  const handleCancel = () => {
    setIsSigninModalOpen(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal} className={styles.buttonSignIn}>
        Sign in
      </Button>
      <Modal 
        title="Sign in" 
        open={isSigninModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}
      >
        <p>Contenu du modal...</p>
      </Modal>
    </div>
  );

}

export default Signin;


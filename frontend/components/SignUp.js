import styles from '../styles/Login.module.css';
import React, { useState } from 'react';
import './index.css';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';

function Signup() {
  const [firstname, setFirstname] = useState(''); 
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 

  const [open, setOpen] = useState(false);
  
  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>SignUp</Button>
      <Modal title="Modal" open={open} onOk={hideModal} onCancel={hideModal} okText="Sign up">
        <input placeholder="Firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname}/>
        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
      </Modal>
    </>
  );
};


export default Signup;

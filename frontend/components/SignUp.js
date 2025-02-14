import styles from '../styles/SignUp.module.css';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
//import { useDispatch} from 'react-redux';

//import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';

function Signup() {
  //const dispatch = useDispatch();
  const router = useRouter()

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

  const handleSubmit = () => {
    fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: firstname, username: username, password: password }),
		}).then(response => response.json())
		.then(data => {
			if (data.result) {
        //dispatch(login({username: signUpUsername, token: data.token}));
        router.push("/home");
      }
    });
  }
  return (
    <>
      <Button type="primary" onClick={showModal}>SignUp</Button>
      <Modal title={<img className={styles.logosuperpose} src="logo_twitter.png" alt="Logo" />} open={open} onOk={hideModal} onCancel={hideModal} okText="Sign up" footer={null} className={styles.modalContent}>
        <div className={styles.bagroundModal}>
          <div>
            <h4>Create your Hackatweet account</h4>
          </div>
          <div>
            <input placeholder="Firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname}/>
            <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username}/>
            <input type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <button type='button' onClick={() => handleSubmit()}>Sign up</button>
        </div>
      </Modal>
    </>
  );
};


export default Signup;

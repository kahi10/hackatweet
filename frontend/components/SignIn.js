import styles from "../styles/signin.module.css";
import { useState } from "react";
import { Modal, Button } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/signin';




function Signin() {

  const dispatch = useDispatch();
  //const signin = useSelector((state) => state.signin.value);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const showModal = () => {
    setIsSigninModalOpen(true);
  };

  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: username, password:password }));
          setUsername("");
          setPassword("");
        }
      });
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        className={styles.buttonSignIn}
      >
        Sign in
      </Button>
      <Modal
        title=""
        open={isSigninModalOpen}
        footer={null}
        className="modalContent"
      >
        <div className={styles.modalContent}>
          <img className={styles.logo} src="logo_twitter.png" alt="logo" />
          <p>Connect to Hackatweet</p>
          <input
            type="name"
            placeholder="Enter your Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button type="primary" onClick={() => handleConnection()}>
            Sign in
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Signin;

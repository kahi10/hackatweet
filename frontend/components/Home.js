import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function Home() {
  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');

  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.value);

  useEffect(() => {
   setFirstName(user.firstname);
   setUsername(user.username);
  }, [user]);

  const handleLogout = () => {
    router.push("/");
    dispatch(logout());
  }

  return (
    <div>
      <div className={styles.userSection}>
        <div className={styles.logo}>
          <img className={styles.logoTweet} src="logo_twitter.png" alt="logoTweet" />
        </div>
        <div>
          <img className={styles.avatar} src="avatar.png" alt="avatar" />
          <div>
            <p>{firstName}</p>
            <p>@{username}</p>
          </div>
        </div>
        <button type="button" onClick={() => handleLogout()}>Logout</button>
      </div>
      <div className={styles.homeSection}>
        <h1>Home</h1>
        
      </div>
      <div className={styles.trendsSection}></div>
    </div>
  );
}

export default Home;
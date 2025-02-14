import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import Trends from "./Trends";

function Home() {
  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const user = useSelector((state) => state.users.value);
 useEffect(() => {
  setFirstName(user.firstname);
  setUsername(user.username);
 }, [user])
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
      </div>
      <div className={styles.homeSection}>
        <h1>Home</h1>
      </div>
      <div className={styles.trendsSection}></div>
      <Trends></Trends>

    </div>
  );
}

export default Home;
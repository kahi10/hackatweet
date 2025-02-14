import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/users'
import { useRouter } from 'next/router';
import Tweet from "./Tweet";
import Trends from "./Trends";

function Home() {
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.value);

 // useEffect(() => {
    //setFirstName(user.firstname);
    //setUsername(user.username);
  //}, [user]);

  const handleLogout = () => {
    router.push("/");
    dispatch(logout());
  };

  const handleClick = () => {
    router.push("/home");
  }

  return (
    <div className={styles.homePage}>
      <div className={styles.userSection}>
        <div className={styles.logo}>
          <img src="logo_twitter.png" alt="logoTweet" width='50px' height='50px' onClick={() => handleClick()}/>
        </div>
        <div className={styles.bottomStyle}>
          <div className={styles.avatarAndUserInfos}>
            <img className={styles.avatar} src="avatar.png" alt="avatar" width='50px' height='50px' />
            <div className={styles.userInfos}>
              <p className={styles.firstname}>{firstName}</p>
              <p className={styles.username}>@{username}</p>
            </div>
          </div>
          <button className={styles.logoutButton}type="button" onClick={() => handleLogout()}>Logout</button>
        </div>
      </div>
      <div className={styles.homeSection}>
        <h1>Home</h1>
        <Tweet></Tweet>
      </div>
      <div className={styles.trendsSection}></div>
      <Trends></Trends>
    </div>
  );
}

export default Home;

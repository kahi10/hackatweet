import styles from "../styles/Home.module.css";
import Login from "../components/Login";
import Signin from "./SignIn";
import Signup from "./SignUp";


function Home() {
  return (
    <div>
      <main className={styles.main}>
      <div>
     <img className={styles.homeImg} src="/twitter_bg.png" alt="imgHome"></img>
      </div>
      <div className={styles.homeRightPart}>
        <img className={styles.logo} src="logo_twitter.png" alt="logo"></img>
        <h1 className={styles.titre}>See what's <br></br>happening</h1>
        <h4 className={styles.titre2}>Join Hackatweet today.</h4>
        <Login></Login>
      </div>

      </main>
    </div>
  );
}

export default Home;

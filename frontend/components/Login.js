import styles from "../styles/Login.module.css";
import Signin from "./SignIn";
import Signup from "./SignUp";


function Login() {



  return (
    <div>
      <main className={styles.main}>
        <div className={styles.containerIMG}>
          <img className={styles.logosuperpose} src="logo_twitter.png"></img>
        </div>
        <div className={styles.homeRightPart}>
          <img className={styles.logo} src="logo_twitter.png" alt="logo"></img>

          <h1 className={styles.titre}>
            See what's <br></br>happening
          </h1>
          <h4 className={styles.titre2}>Join Hackatweet today.</h4>
          <Signin></Signin>
          <p className={styles.loginP}>Already have an account?</p>
          <Signup></Signup>
        </div>
      </main>
    </div>
  );
}

export default Login;

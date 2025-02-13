import styles from "../styles/Home.module.css";
import Login from "./Login";


function Home() {
  return (
    <div>
      <main className={styles.body}>
      <div coté gauche>
        <img logo />
        <div infos utilisateur></div>
        <button Logout > Logout</button>
      </div>
      <div Home>
        <div message></div>
        <div coeur></div>
        <div poubelle></div>
      </div>
      <div Trends></div>
      </main>
    </div>

  );
}

export default Home;
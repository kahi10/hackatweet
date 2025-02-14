import styles from "../styles/Tweet.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

function Tweet() {
  const [tweet, setTweet] = useState("");
  const [count, setCount] = useState();

  const user= useSelector((state) => state.users); 
  console.log(user);


  const handleChange = (e) => {
    setTweet(e.target.value);
    setCount(e.target.value.length); 
  };


  const handleSubmit = () => {

    if (tweet.trim().length === 0) {
      alert("Tweet cannot be empty!");
      return;
    }

      fetch("http://localhost:3000/tweets/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contenu: tweet,
          createPerson: user.token,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          setTweet("");
          setCount(0); 
        }
      })
    };

  return (
    <div>
      <div className={styles.tweetsContainer}>
        <h1 className={styles.title}></h1>
        <input
          className={styles.message}
          onChange={handleChange}
          maxlength="280"
          placeholder="What's up?"/>
        <div className={styles.buttontweet}>
          <p>{count}/280</p>
          <button className={styles.buttontweet} onClick={handleSubmit}>
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tweet;

import styles from '../styles/Tweet.module.css';
import { useState } from 'react';

function Tweet() {
const [message, setMessage] = useState('');
const [count, setCount] = useState();

const handleSubmit = () => {
    console.log(message);
  };
   const handlechange = (e) => {
    setMessage(e.target.value);
    setCount(message.length)
   }

 console.log(count)


 return (
   <div>
     <main className={styles.main}>
       <h1 className={styles.title}> 
       </h1>
       <input className={styles.message} onChange={handlechange} value={message} maxlength="280" placeholder="What's up"/>
       <p>{count}/280</p>
       <button className={styles.button} onClick={() => handleSubmit()}>Tweet</button>
     </main>
   </div>
 );
}

export default Tweet;
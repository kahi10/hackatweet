import styles from "../styles/Trends.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';


function Trends() {

    const [compteurhashtag, setCompteurHastage] = useState();


    useEffect(() => {
        fetch('http://localhost:3000/tweets/hashtag')
          .then(response => response.json())
          .then(data => {
            setCompteurHastage(data);
          });
      }, []);

      let trends =[];
  if (compteurhashtag.length > 0) {
    trends = compteurhashtag.map((data, i) => {
      return <Article key={i} {...data} isBookmarked />;
    });
  }

    return (
      <div className={styles.trendsContainer}>
        <h1 className={styles.titreTrends}>Trends</h1>

      </div>
  
    )
  }
  
  export default Trends;
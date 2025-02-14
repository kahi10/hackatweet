import styles from "../styles/Trends.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';


function Trends() {

    const [compteurhashtag, setCompteurHastage] = useState();


    return (
      <div className={styles.trendsContainer}>
        <h1 className={styles.titreTrends}>Trends</h1>
      </div>
  
    )
  }
  
  export default Trends;
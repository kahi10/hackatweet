import styles from "../styles/Trends.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';


function Trends() {

        const [compteurhashtag, setCompteurHastage] = useState([]);  
      
        const tableauHashtage = [
          { nameHastag: "SUPER", nbHastage: 4 }
        ];
      
     
        useEffect(() => {
          setCompteurHastage(tableauHashtage);  
        }, []);  
      
    
        let trends = [];
        if (compteurhashtag && compteurhashtag.length > 0) {
          trends = compteurhashtag.map((data, i) => {
            return (
              <div key={i} className={styles.divTrend}>
                <h3>#{data.nameHastag}</h3>
                <p className={styles.hashtagCount}>Hashtag Count: {data.nbHastage}</p>
              </div>
            );
          });

    //useEffect(() => {
        //fetch('http://localhost:3000/tweets/hashtag')
          //.then(response => response.json())
          //.then(data => {
            //setCompteurHastage(data);
         // });
      //}, []);


    return (
      <div className={styles.trendsContainer}>
        <h1 className={styles.titreTrends}>Trends</h1>
        {trends}

      </div>
  
    )
  }}
  
  export default Trends;
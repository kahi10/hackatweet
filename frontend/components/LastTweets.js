//import styles from '../styles/LastTweet.module.css';
import { useRouter } from 'next/router';
import {faHeart, faTrash} from FontAwesomeIcon;


function LastTweet() {
const deleteMessage = message
    const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
            .then(response => response.json())
            .then(data => {
                setMessage(data);
            });
    }, []);

     const lastTweet = message.map((data, i) => {
    return (
        <div>
            <p>{message}</p>
            <FontAwesomeIcon onClick={() => like()} icon={faHeart} style={iconStyle} className={styles.like}/>
            <FontAwesomeIcon onClick={() => deleteMessage()}  className={styles.eyeShashIcon} icon={faTrash} />
             
        </div>);
})}

export default LastTweet;


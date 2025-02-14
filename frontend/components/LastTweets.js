//import styles from '../styles/LastTweet.module.css';
import { useRouter } from 'next/router';


function LastTweet() {

    const [message, setMessage] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
            .then(response => response.json())
            .then(data => {
                setMessage(data);
            });
    }, []);

    return (
        <div>
            <p>{message}</p>
            <FontAwesome>
                
            </FontAwesome>
        </div>);
}

export default LastTweet;





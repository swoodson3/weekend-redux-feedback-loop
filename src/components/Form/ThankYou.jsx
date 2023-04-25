import {useHistory} from 'react-router-dom';


function ThankYou() {
  const history = useHistory();

  const feedback = () => {
    history.push("/");
  }
    return (
        <>
        <h3 style={{fontSize: 20}}>Thank you for your feedback!</h3>
        <button onClick={feedback}>Leave new Feedback!</button>
        </>
    )
}

export default ThankYou;
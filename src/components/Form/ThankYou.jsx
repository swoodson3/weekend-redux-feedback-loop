import {useHistory} from 'react-router-dom';


function ThankYou() {
  const history = useHistory();

  const feedback = () => {
    history.push("/");
  }
    return (
        <>
        <h3 style={{fontSize: 30}}>Thank you for your feedback!</h3>
        {/* inline styling for the button */}
        <button className="button" 
        style={{
            backgroundColor: 'navy',
            color: 'white',
            frontWeight: 'bold',
            width: '200px',
            height: '50px'
        }} 
        onClick={feedback}>Leave new Feedback!</button>
        </>
    )
}

export default ThankYou;
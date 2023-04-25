import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function UnderstandingOne() {
    const dispatch = useDispatch();
    const history = useHistory();
    const understandingOne = useSelector(store => store.understandingOne)

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue >=1 && inputValue <= 5) {
            const action = { type: 'SET_UNDERSTANDING_RATE', payload: inputValue };
            dispatch (action);
        } else {
            alert('Please enter a number between 1 to 5.');
            event.target.value = '';
        }
        
    }
 
    const nextPage = () => {
        if (!isNaN(understandingOne) && understandingOne >= 1 && understandingOne <= 5) {
          history.push('/support');
        } else {
          alert('Please enter a number between 1 to 5.');
        }
      }


    return (
        <>
            <h3 style= {{fontSize: 30 }}>How well are you understanding the content on a scale of 1 to 5?</h3>
                <input className ="inputButtontwo" style={{width: '150px', height: '20px', borderRadius: '5px', border: '1px solid gray', padding: '5px' }} onChange={handleChange} type="number" placeholder='Leave a rating' />
                <input className="submitButtontwo"
                style={{
                    backgroundColor: 'navy',
                    color: 'white',
                    frontWeight: 'bold',
                    width: '60px',
                    height: '30px'
                }} type="submit" />
                <button className="nextPageButtontwo"
                style={{
                    backgroundColor: 'navy',
                    color: 'white',
                    frontWeight: 'bold',
                    width: '60px',
                    height: '30px'
                }} onClick={nextPage}>Next</button>
        </>
    )
}

export default UnderstandingOne;
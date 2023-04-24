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
        }
        
    }
 
    const nextPage = () => {
        if (understandingOne > 0 && understandingOne < 6) {
            history.push('/support');
        } else {
        }
    }


    return (
        <>
            <h3>How well are you understanding the content on a scale of 1 to 5?</h3>
                <input onChange={handleChange} type="number" placeholder='Leave a rating' required />
                <input type="submit" />
                <button onClick={nextPage}>Next</button>
        </>
    )
}

export default UnderstandingOne;
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';


function FeelingOne() {
const dispatch = useDispatch();
const history = useHistory();
const feelingOne = useSelector(store => store.feelingOne);

const inputFeelings = (event) => {
    const inputValue = event.target.value;
    if (inputValue >= 1 && inputValue <= 5) {
        const action = { type: 'SET_FEELING_RATE', payload: inputValue };
        dispatch(action);
    } else {
        alert('Please enter a number between 1 to 5.');
    }
}

const nextPage = () => {
    if (feelingOne > 0 && feelingOne < 6) {
        history.push('/understanding');
    } else {
    }
}

    return (
        <>
        <h3>How are you feeling on a scale of 1 to 5?</h3>
                <form>
                <input onChange={inputFeelings} type="number" placeholder='Leave a rating' required/>
                <input type="submit" />
                <button onClick={nextPage}>Next</button>
                </form>
        </>
    )
}

export default FeelingOne;
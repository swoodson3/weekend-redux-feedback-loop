import { useSelector, useDispatch } from 'react-redux';
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
        if (feelingOne && !isNaN(feelingOne) && feelingOne >= 1 && feelingOne <= 5) {
            history.push('/understanding');
        } else {
            alert('Please enter a number between 1 to 5.');
        }
    }

    return (
        <>
            <h3 style={{ fontSize: 30 }}>How are you feeling on a scale of 1 to 5?</h3>
            <input className ="inputButton" style={{width: '150px', height: '20px', borderRadius: '5px', border: '1px solid gray', padding: '5px' }} onChange={inputFeelings} type="number" placeholder='Leave a rating' />
            <button className="nextPageButton"
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

export default FeelingOne;
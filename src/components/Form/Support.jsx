import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function supportInput() {
    const dispatch = useDispatch();
    const history = useHistory();
    const supportOne = useSelector(store => store.supportOne)

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue >=1 && inputValue <= 5) {
            const action = { type: 'SET_SUPPORT_RATE', payload: inputValue };
            dispatch (action);
        } else {
            alert('Please enter a number between 1 to 5.');
        }
        
    }
 
    const nextPage = () => {
        if (supportOne > 0 && supportOne < 6) {
            history.push('/comments');
        } else {
        }
    }


    return (
        <>
            <h3>How well are you being supported on a scale of 1 to 5?</h3>
            <form>
                <input onChange={handleChange} type="number" placeholder='Leave a rating' required />
                <input type="submit" />
                <button onClick={nextPage}>Next</button>
            </form>
        </>
    )
}

export default supportInput;
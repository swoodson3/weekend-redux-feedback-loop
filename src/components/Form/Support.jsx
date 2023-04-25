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
        if (supportOne && !isNaN(supportOne) && supportOne >= 1 && supportOne <= 5) {
            history.push('/comments');
        } else {
            alert('Please enter a number between 1 to 5.')
        }
    }


    return (
        <>
            <h3 style={{fontSize: 30}}>How well are you being supported on a scale of 1 to 5?</h3>
            <input className ="inputButtonFour" style={{width: '150px', height: '20px', borderRadius: '5px', border: '1px solid gray', padding: '5px' }} onChange={handleChange} type="number" placeholder='Leave a rating' />
            <button className="nextPageButtonFour"
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

export default supportInput;
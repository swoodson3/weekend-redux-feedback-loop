import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    // const understandingOne = useSelector(store => store.understandingOne)

    const handleChange = (event) => {
         {dispatch ({ type: 'SET_COMMENT', payload: event.target.value });
        } 
        
    }
 
    const nextPage = () => {
         history.push('/review');
    }


    return (
        <>
            <h3>Any comments you want to leave?</h3>
            <form>
                <input onChange={handleChange} type="text" placeholder='Leave a comment' required />
                <input type="submit" />
                <button onClick={nextPage}>Next</button>
            </form>
        </>
    )
}


export default Comments;
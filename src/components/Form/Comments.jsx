import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (event) => {
         {dispatch ({ type: 'SET_COMMENT', payload: event.target.value });
        } 
        
    }
 
    const nextPage = () => {
         history.push('/review');
    }


    return (
        <>
            <h3 style={{fontSize: 30}}>Any comments you want to leave?</h3>
            <input className ="inputButtonThree" style={{width: '150px', height: '20px', borderRadius: '5px', border: '1px solid gray', padding: '5px' }} onChange={handleChange} type="text" placeholder='Leave a comment' />
                <button className="nextPageButtonThree"
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


export default Comments;
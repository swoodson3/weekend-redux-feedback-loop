import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review() {
    const dispatch = useDispatch();
    const history = useHistory();
    const feelingOne = useSelector(store => store.feelingOne);
    const understandingOne = useSelector(store => store.understandingOne);
    const supportOne = useSelector(store => store.supportOne);
    const commentOne = useSelector(store => store.commentOne);



    const nextPage = () => {
        axios.post('/feedback', {
            feelings: feelingOne,
            understandings: understandingOne,
            supports: supportOne,
            comments: commentOne
        }).then((response) => {
            dispatch({ type: 'CLEAR_FORM' });
        }).catch((error) => {
            console.log(`Error in axios POST: ${error}`);
            alert('Something went wrong!');
        })

        history.push('/thank-you')
    }



    return (
        <>
            <h3 style={{ fontSize: 30 }}>Review your Feedback.</h3>
            <p style={{ fontWeight: 'bold' }}>Feelings: {feelingOne}</p>
            <p style={{ fontWeight: 'bold' }}>Understanding: {understandingOne}</p>
            <p style={{ fontWeight: 'bold' }}>Support: {supportOne}</p>
            <p style={{ fontWeight: 'bold' }}>Comments: {commentOne}</p>
            <button className="nextPageButtonFive"
                style={{
                    backgroundColor: 'navy',
                    color: 'white',
                    frontWeight: 'bold',
                    width: '60px',
                    height: '30px'
                }} onClick={nextPage}>Submit</button>
        </>
    )
}

export default Review;
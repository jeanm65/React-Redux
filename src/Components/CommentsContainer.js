import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { apiCall } from '../Redux/comments/actionComments';

const CommentsContainer = () => {
    const apiData = useSelector( (state) => state.comments);

    const dispatch = useDispatch()
   

    // console.log(apiData)

    useEffect(() => {
        dispatch(apiCall())
    
    }, [dispatch])

    const displayApiData = apiData.isLoading ?  (
        <p>Loading...</p>
    ) : apiData.error ? (
        <p>{apiData.error}</p>
    ) : (
        apiData.comments.map(comment => {
            return(
                <div key={comment.id} className='comments'>
                    <p>{comment.body}</p>
                </div>
            )
        })
    )

    return ( 
            <>
                <h2>Commentaires : </h2>
                {displayApiData}
            </>
        
    );
};

// const mapStateToProps = (state) => {
//   return{
//       apiData: state.comments
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//     apiComment : () => {
//         dispatch(apiCall())
//       } 
//   }  
// }

export default CommentsContainer; 

// const CommentsContainer = ({apiData, apiComment}) => {

//     // console.log(apiData)

//     useEffect(() => {
//       apiComment()
    
//     }, [apiComment])

//     const displayApiData = apiData.isLoading ?  (
//         <p>Loading...</p>
//     ) : apiData.error ? (
//         <p>{apiData.error}</p>
//     ) : (
//         apiData.comments.map(comment => {
//             return(
//                 <div key={comment.id} className='comments'>
//                     <p>{comment.body}</p>
//                 </div>
//             )
//         })
//     )

//     return ( 
//             <>
//                 <h2>Commentaires : </h2>
//                 {displayApiData}
//             </>
        
//     );
// };

// const mapStateToProps = (state) => {
//   return{
//       apiData: state.comments
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return{
//     apiComment : () => {
//         dispatch(apiCall())
//       } 
//   }  
// }

// export default connect(mapStateToProps, mapDispatchToProps) (CommentsContainer); 
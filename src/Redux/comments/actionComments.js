import{LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR} from './type';
import axios from 'axios';

export const loadApiComment = () => {
  return {
      type:LOAD_COMMENTS
  }
}

export const loadApiCommentSuccess = (comments) => {
    return {
        type:LOAD_COMMENTS_SUCCESS, 
        payload:comments
    }
  }

  export const loadApiCommentError = (error) => {
    return {
        type:LOAD_COMMENTS_ERROR,
        payload:error
    }
  }

// export const apiCall = () => {
//   return (dispatch) => {

//     // let's dispatch the 1st action:
//     dispatch(loadApiComment())
//     axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
//       // dispatch loadApiCommentSuccess when the request is success

//       // dispatch the 2nd action:
//       dispatch(loadApiCommentSuccess(res.data))
//     })
//     .catch((err) => {

//       // dispatch the 3rd action
//         dispatch(loadApiCommentError(err.message))
//     })
//   }
// }

export const apiCall = () => {
  return async (dispatch) =>{
    try{
      dispatch(loadApiComment())
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
      const data = await dispatch(loadApiCommentSuccess(res.data))
      return data;
    }
  catch(err) {
    dispatch(loadApiCommentError(err.message))
    }
  }
} 

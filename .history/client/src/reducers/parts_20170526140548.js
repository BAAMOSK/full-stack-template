import {addItem} from '../actions';
const initialState = {
  data:[],
  loading: false,
  err: null
};

export default (state=initialState, action) => {
  switch(action.type){
    case 'REQUEST_DATA':
      return ({
        ...state,
        loading: true
      })
    case 'RECEIVE_DATA':
      return ({
        data: action.data,
        loading: false
      })
    case 'ERROR':
      return ({
        err: true
      })

    default: return state;
  }
}
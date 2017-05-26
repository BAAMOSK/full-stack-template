import {addItem} from '../actions';
const initialState = {
  data:[]
};

export default (state=initialState, action) => {
  switch(action.type){
    case 'REQUEST_DATA':
      return ({
        ...state,
        data: [...state.data, action.data]
      })
    case 'GET_ITEMS':
      return ()

    

    default: return state;
  }
}
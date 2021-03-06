const initialState = {
  data:[],
  loading: false,
  err: null
};

export default (state=initialState, action) => {
  switch(action.type){
    case 'REQUEST_DATA':
      return {
        ...state,
        loading: true
      }
    case 'RECIEVE_DATA':
      return {
        ...state,
        data: action.data,
        loading: false
      }
    case 'ERROR':
      return {
        ...state,
        err: action.err
      }

    default: return state;
  }
}
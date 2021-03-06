export const REQUEST_DATA = 'REQUEST_DATA';
export const requestData = () => ({
  type: REQUEST_DATA
});

export const RECIEVE_DATA = 'RECIEVE_DATA';
export const recieveData = (data) =>({
  type: RECIEVE_DATA,
  data
});

export const ERROR = 'ERROR';
export const error = (err) => ({
  type: ERROR,
  err
});

export const fetchData = () =>{
  return dispatch => {
    dispatch(requestData());

  fetch('http://localhost:8080/api')
  .then(res => res.json())
  .then(res => dispatch(recieveData(res.data)))
  .catch(err => err);
  };
};
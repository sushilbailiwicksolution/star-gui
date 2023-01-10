import axios from 'axios';

const defaultContentType = 'application/json';
// const apiUrl = IP + PORT_3333 + APP_SERVICE + AUTHENTICATE;

const apiUrl= process.env.REACT_APP_LOGIN_API

const headers = { 'Content-Type': defaultContentType };


/** AUTHENTICATE USER */
export const authenticateUser = (requestParams) => {
    return new Promise((resolve, reject) => {
      axios
        .post(apiUrl, JSON.stringify(requestParams), { headers })
        .then((results) => {
          console.log(results.data, 'api')
          const resultData = results && results.data ? results.data : false;
          if (resultData && !resultData.results.response) {
            let obj = { status: 200, response: resultData };
            return resolve(obj);
            //return resolve(resultData);
          } else {
            return reject({ status: 400, msg: 'Something Went Wrong' });
          }
        })
        .catch((err) => {
          console.log('err', err);
          return reject({ status: 404, msg: err.message });
        });
    });
  };

  export const LoginService = {
    authenticateUser,
  };





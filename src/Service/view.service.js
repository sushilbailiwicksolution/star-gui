import axios from 'axios';
import { IP, PORT_8083, PORT, APP_SERVICE, USERS } from '../Config/siteConfig';

const defaultContentType = 'application/json';
const apiUrl = IP + PORT + APP_SERVICE + USERS;

const headers = { 'Content-Type': defaultContentType };

export const getBaronData = (url) => {
  let apiUrl = `${url}`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiUrl)
      .then((results) => {
        const resultData = results && results.data ? results.data : false;
        if (resultData) {
          //return resolve(REPORTDATA);
          return resolve(resultData);
        } else {
          return reject({ status: 400, msg: 'No record found!' });
        }
      })
      .catch((err) => {
        console.log('err', err);
        return reject({ status: 404, msg: err.message });
      });
  });
};

export const viewService = {
  getBaronData
};

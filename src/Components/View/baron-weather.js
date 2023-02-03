import CryptoJS from 'crypto-js';
import {
  BARON_BASE_URL,
  BARON_KEY,
  BARON_SECRET
} from '../../Config/siteConfig';
import { viewService } from '../../Service/view.service';

const PRODUCT = 'C39-0x0302-0';
const CONFIGURATION = 'Standard-Mercator';

const baronWeatherMap = () => {
 const signature = get_signature();
  // sending request for meta data
  const metaurl =
    BARON_BASE_URL +
    '/' +
    BARON_KEY +
    '/meta/tiles/product-instances/' +
    PRODUCT +
    '/' +
    CONFIGURATION +
    '.json?' +
    signature;

  return new Promise(async (resolve, reject) => {
    try {
      const baronResponse = await viewService.getBaronData(metaurl);
      let obj = {
        PRODUCT,
        CONFIGURATION,
        signature,
        baronResponse
      };
      resolve(obj);
    } catch (error) {
      reject(error);
    }
  });
};

const get_signature = () => {
  var ts = Math.round(new Date().getTime() / 1000); // Unix time stamp
  var string_to_sign = BARON_KEY + ':' + ts;
  var hmac = CryptoJS.HmacSHA1(string_to_sign, BARON_SECRET); // Hmac using sha-1 function
  var sig = CryptoJS.enc.Base64.stringify(hmac); // Converting to Base64
  sig = sig.replace(/\+/g, '-').replace(/\//g, '_'); // Replacing '+' to '-' and '/' to '_'
  return 'ts=' + ts + '&sig=' + sig;
};

export const BaronMethods = {
  baronWeatherMap
};

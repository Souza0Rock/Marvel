import axios from 'axios';
import md5 from 'md5';

const ts = Number(new Date());

const publicKey = 'cb2779f0141e2cb6c501d16d11506d1a';
const privateKey = '8e7fd902aaed64859d0bc821596621aea13cc140';

const hash = md5(ts + privateKey + publicKey);

const Api = axios.create ({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash,
    }
});

export default Api;

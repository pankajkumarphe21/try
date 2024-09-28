import axios from 'axios';

const makeRequest=axios.create({
    baseURL:'https://try-five-iota.vercel.app'
})

export default makeRequest;
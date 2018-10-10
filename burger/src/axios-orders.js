import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-daf10.firebaseio.com/"
});

export default instance;
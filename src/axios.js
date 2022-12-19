import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://us-central1-project-572ed.cloudfunctions.net/api'
})

export default instance
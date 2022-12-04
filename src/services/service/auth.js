import axios from "../index"

const loginUser = (payload) => {
    return axios.post('/api/login', payload.data)
}
const registerUser = (payload) => {
    return axios.post('/api/register', payload.data)
}


export default {loginUser, registerUser}
import axios from "../index"

const get_Me = (payload) => {
    return axios.get('/api/users/me')
}
const update_avatar = (payload) => {
    return axios.post('/api/users/update-avatar', payload.data)
}


export default {get_Me, update_avatar}
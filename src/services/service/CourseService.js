import axios from "../index"




const courseList = (payload) => {
    return axios.get('/api/courses/index')
}



export default {courseList}
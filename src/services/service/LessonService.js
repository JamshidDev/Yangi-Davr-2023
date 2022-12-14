import axios from "../index"




const LessonList = (payload) => {
    return axios.get('/api/lessons/get', {params:payload})
}



export default {LessonList}
import axios from "../index"




const get_Lesson_Test = (payload) => {
    return axios.get(`/api/questions/${payload.lesson_id}`)
}
const check_Lesson_Test = (payload) => {
    return axios.get(`/api/questions/check`)
}



export default {get_Lesson_Test, check_Lesson_Test}
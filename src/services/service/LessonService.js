import axios from "../index"




const LessonList = (payload) => {
    return axios.get('/api/lessons/get', {params:payload})
}

const SHowLesson = (payload) => {
    return axios.get(`/api/lessons/${payload.lesson_id}`,)
}




export default {LessonList, SHowLesson}
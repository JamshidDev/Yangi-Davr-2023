import axios from "../index"

const get_CommentByLessonId = (payload) => {
    return axios.get(`/api/comments/lesson/${payload.lesson_id}`)
}
const get_CommentById = (payload) => {
    return axios.get(`/api/comments/${payload.comment_id}`)
}



export default {get_CommentByLessonId, get_CommentById}
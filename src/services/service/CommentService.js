import axios from "../index"

const get_CommentByLessonId = (payload) => {
    return axios.get(`/api/comments/lesson/${payload.lesson_id}`)
}
const get_CommentById = (payload) => {
    return axios.get(`/api/comments/${payload.comment_id}`)
}
const create_Lesson_Comment = (payload) =>{
    return axios.post(`/api/comments/comment`, payload.data)
}

const update_Comment = (payload) =>{
    return axios.post(`/api/comments/update/${comment_id}`, payload.data)
}
const delete_Comment = (payload) =>{
    return axios.post(`/api/comments/${comment_id}`)
}



export default {get_CommentByLessonId, get_CommentById,create_Lesson_Comment, update_Comment, delete_Comment }
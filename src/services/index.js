
import axios from "axios";
import router from "../router/index"
const instance = axios.create({
    baseURL: `https://yangidavr.com`
});



instance.interceptors.request.use(function (config) {
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
    if (token) {
        console.log(config);
        config.headers['Access-Control-Allow-Origin'] = '*'
        config.headers['Authorization'] = 'Bearer ' + token
    }
    return config;
});

instance.interceptors.response.use(
    response=>response,
    error=>{
        console.log(error);
        if(error.response.status==401){
            router.push("/login")
        }
        return Promise.reject(error);
    }
)



export default instance
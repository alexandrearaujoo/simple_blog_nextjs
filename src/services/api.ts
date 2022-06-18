import axios from "../../node_modules/axios/index";

const api = axios.create({
    baseURL: 'https://api-blog-m2.herokuapp.com'
})

export default api

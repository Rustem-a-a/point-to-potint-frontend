import axios from "axios"

const instance = axios.create({
    // baseURL:'http://localhost:5000'
    baseURL:'https://point-to-point-backend.herokuapp.com'
})
export default instance
import axios from "axios"

const instance = axios.create({
    baseURL:'https://point-to-point-backend.herokuapp.com'
})
export default instance
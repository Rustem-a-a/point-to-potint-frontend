import axios from "../axios";
import {setUser} from "../store/userReducer";

export const registration = async(username,password)=>{
    try{
       const response= await axios.post('/auth/registration',{
            username,
            password
        })
    alert(response.data.message)
    }
    catch (e){
        alert(e.response.data.message + ' ошибка')
    }
}

// export const login = (username,password)=>{
//     return async dispatch =>
//     {try{
//         const response= await axios.post('/auth/login',{
//             username,
//             password
//         })
//         localStorage.setItem('token', response.data.token)
//         dispatch(setUser(response.data.user))
//            }
//     catch (e){
//         alert(e.response.data.message + ' ошибка')
//     }}
// }


// export const auth = ()=>{
//     return async dispatch =>{
//         try{
//         const response= await axios.get('/auth/auth',
//             {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
//         )
//             console.log(response.data)
//             console.log(localStorage.getItem('token'))
//         dispatch(setUser(response.data.user))
//         localStorage.setItem('token', response.data.token)
//     }
//         catch (e){
//         // alert(e.response.data.message)
//         localStorage.removeItem('token')
//     }}
// }
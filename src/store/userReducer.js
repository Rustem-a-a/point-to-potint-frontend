// const SET_USER = 'SET_USER'
// const SET_EXIT = 'SET_EXIT'
// const defaultState = {
//     currentUser:{},
//     isAuth:false
// }
//
// export const userReducer =(state = defaultState,action)=>{
//     switch(action.type){
//         case SET_USER:
//             return {
//             ...state,
//             currentUser: action.payload,
//             isAuth: true
//             }
//         case SET_EXIT:
//             localStorage.removeItem('token')
//             return {...state,
//             currentUser: {},
//             isAuth: false}
//
//         default:
//             return state
//     }
// }
//
// export const setUser = (user)=>({type:SET_USER, payload:user})
// export const setExit = ()=>({type:SET_EXIT})
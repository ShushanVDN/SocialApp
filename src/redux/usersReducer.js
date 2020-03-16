
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initalState ={
  users: [
    //   {id: 1, photoUrl:"../../images/12.jpg", followed: false, fullName: 'Dmitriy', status: 'I am a developer', location: { city:'Minsk', country:'Belarus'} },
    //   {id: 2, photoUrl:"../../images/12.jpg", followed: false,  fullName: 'Sasha', status: 'I am a teacher', location: { city:'Moscow', country:'Russia'} },
    //   {id: 3, photoUrl:"../../images/12.jpg", followed: true,  fullName: 'Anna', status: 'I am a dremer', location: { city:'Minsk', country:'ARmenia'} }
  ]
}

const usersReducer = (state = initalState,action) => {

    switch(action.type) {
        case FOLLOW: 
            return {
                // let stateCopy = { 
                ...state , 
                // users: [...state.users]}
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true }
                    }
                    return u
                })
            }
            
        case UNFOLLOW: 
        return {
            ...state , 
            users: state.users.map(u => {
                if(u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u
            })
        }
        case SET_USERS:
        return{
            ...state,
            users: [...state.users, ...action.users]
        }

        default:
          return state  
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer

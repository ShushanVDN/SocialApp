
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initalState = {
    users: [
    //   {id: 1, photoUrl:"../../images/12.jpg", followed: false, fullName: 'Dmitriy', status: 'I am a developer', location: { city:'Minsk', country:'Belarus'} },
    //   {id: 2, photoUrl:"../../images/12.jpg", followed: false,  fullName: 'Sasha', status: 'I am a teacher', location: { city:'Moscow', country:'Russia'} },
    //   {id: 3, photoUrl:"../../images/12.jpg", followed: true,  fullName: 'Anna', status: 'I am a dremer', location: { city:'Minsk', country:'ARmenia'} }
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            users: action.users
        }
        case SET_CURRENT_PAGE:
        return{
            ...state,
            currentPage: action.currentPage
        }
        case SET_TOTAL_USERS_COUNT:
        return{
            ...state,
            totalUsersCount:  action.count
        }
        case TOGGLE_IS_FETCHING:
        return{
            ...state,
            isFetching: action.isFetching
        }

        default:
          return state  
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})

export default usersReducer

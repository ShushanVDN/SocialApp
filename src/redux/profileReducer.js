const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEX';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

let initalState = {
    posts: [
        {id: 1, message: 'How are you', likesCount: 12},
        {id: 2, message: 'What is your name', likesCount: 17},
        {id: 3, message: 'This is my first post', likesCount: 20},
        {id: 4, message: 'I receive some projecs', likesCount: 7},
        {id: 5, message: 'I like coding', likesCount: 65},
        {id: 6, message: 'yeaaahh', likesCount: 14}
    ],
    messages: [
        {id: 1, message: 'How is your React'},
        {id: 2, message: 'Hakob how are you'},
        {id: 3, message: 'How long you work there'},
        {id: 4, message: 'Can I help you'},
        {id: 5, message: 'Thats great'},
        {id: 6, message: 'yo'}
    ],
    profile: null
}

const profileReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewTextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUsersProfile = profile => ({type: SET_USERS_PROFILE,  profile})

export default profileReducer

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEX';

let initalState ={
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
}

const profileReducer = (state=initalState,action) => {

    switch(action.type) {
        case ADD_POST: let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}

export const addPostActionCreeator = () => ({type: ADD_POST})
export const updateNewTextActionCreator = text =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer

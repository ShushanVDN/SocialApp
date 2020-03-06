const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEX';
const UPDATE_NEW_MESSAGE_Body = 'UPDATE_NEW_MESSAGE_Body';
const SEND_MESSAGE = 'SEND_MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you', likesCount: 12},
                {id: 2, message: 'What is your name', likesCount: 17},
                {id: 3, message: 'This is my first post', likesCount: 20},
                {id: 4, message: 'I receive some projecs', likesCount: 7},
                {id: 5, message: 'I like coding', likesCount: 65},
                {id: 6, message: 'yeaaahh', likesCount: 14}
            ],
            newPostText: 'add new post'
        },
        disalogsPage: {
            dialogs: [
                {id: 1, name: 'Anna'},
                {id: 2, name: 'Hakob'},
                {id: 3, name: 'Gohar'},
                {id: 4, name: 'David'},
                {id: 5, name: 'Margarita'},
                {id: 6, name: 'Robert'}
            ],
            messages: [
                {id: 1, message: 'How is your React'},
                {id: 2, message: 'Hakob how are you'},
                {id: 3, message: 'How long you work there'},
                {id: 4, message: 'Can I help you'},
                {id: 5, message: 'Thats great'},
                {id: 6, message: 'yo'}
            ],
            newMessageBody: ''
        },

        _callsubscriber() {
            console.log('State changed')
        },

        getState() {
            return this._state
        },
        subscribe(observer) {
            this._callsubscriber = observer;
        },

        dispatch(action) {
            if (action.type === ADD_POST) {
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callsubscriber(this._state)
            } else if (action.type === UPDATE_NEW_POST_TEXT) {
                this._state.profilePage.newPostText = action.newText;
                this._callsubscriber(this._state)
            } else if (action.type === UPDATE_NEW_MESSAGE_Body) {
                this._state.disalogsPage.newMessageBody = action.body
                this._callsubscriber(this._state)
            } else if(  action.type === SEND_MESSAGE) {
                let body = this._state.disalogsPage.newMessageBody = ''
                this._state.disalogsPage.push({id:6, message: 'body'})
                this._callsubscriber(this._state)
            }
        }
    }
}

// export const addPostActionCreeator = () => {
//     return {
//         type: ADD_POST
//     }
// }
export const addPostActionCreeator = () => ({type: ADD_POST})
export const updateNewTextActionCreator = text =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_Body, body: body})


export default store
window.store = store

import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";
import dialogsReducer from "./dialogsReducer";



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
        dialogsPage: {
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
            sideBar:[

            ],
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
            this._state.profilePage = profileReducer(this._state.profilePage, action)
            this._state.sideBar = sideBarReducer(this._state.sideBar, action)
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
            
            this._callsubscriber(this._state)
        }

    }
}

// export const addPostActionCreeator = () => {
//     return {
//         type: ADD_POST
//     }
// }


export default store
//window.store = store

const UPDATE_NEW_MESSAGE_Body = 'UPDATE_NEW_MESSAGE_Body';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initalState = {
    dialogs: [
        {id: 1, name: 'Anna'},
        {id: 2, name: 'Hakob'},
        {id: 3, name: 'Gohar'},
        {id: 4, name: 'David'},
        {id: 5, name: 'Margarita'},
        {id: 6, name: 'Robert'}
    ]
}

export const dialogsReducer = (state=initalState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_Body:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.message.push({id:6, message: 'body'})
            return state
        default:
            return state
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_Body, body: body})

export default dialogsReducer 

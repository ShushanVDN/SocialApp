import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer'
import Dialogs from "./Dialogs";
import {connect} from 'react-redux'
//import StoreContext from "../../StoreContext";

// const DialogsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             { store => {
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreator())
//                 };
//                 let onNewMessageChange = (body) => {
//                     dispatch(updateNewMessageBodyCreator(body))
//                 }
//                 return <Dialogs updateNewMessageBody={onNewMessageChange}
//                                 sendMessage={onSendMessageClick}
//                                 dialogsPage={store.dialogsPage} /> }}
//         </StoreContext.Consumer>};

//export default DialogsContainer

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let  mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator())
        },
        SendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default SuperDialogsContainer

import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/disalogsReducer'
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {


    return (
        <StoreContext.Consumer>
            { store => {
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                };
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                onSendMessage={onSendMessageClick}
                                dialogsPage={store.disalogsPage} />
            }
            }
        </StoreContext.Consumer>

    )
};

export default DialogsContainer

import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let DialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let MessagesElement = props.state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = props.state.newMessageBody;

    let onSendMessageClick = () => {

    }
    let onNewMessageChange = (e) => {
        e.target
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/* <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} /> */}
                {/* <div className={s.dialog+' '+ s.active}>
                    <NavLink to='/dialogs/2'>Hakob</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Gohar</NavLink> 
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>David</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Maga</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Rob</NavLink>
                </div> */}
                {DialogsElement}
            </div>
            <div className={s.messages}>
                {/* <div className={s.message}>
                    how are you
                </div>
                <div className={s.message}>
                    what is your name
                </div>
                <div className={s.message}>
                    yeeahh
                </div> */}
                {/* <Message message={MessageData[1].message} /> */}
                <div>{MessagesElement}</div>

                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder={'Enter your message'}
                                  value='Enter your message'/>
                    </div>
                    <button onClick={onSendMessageClick}>Add post</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs

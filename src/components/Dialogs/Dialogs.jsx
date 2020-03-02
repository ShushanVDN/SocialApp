import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


// const DialogsData = [
//     {id: 1, name: 'Anna'},
//     {id: 2, name: 'Hakob'},
//     {id: 3, name: 'Gohar'},  
//     {id: 4, name: 'David'},
//     {id: 5, name: 'Margarita'},
//     {id: 6, name: 'Robert'},  
// ]



// const messages= [
//     {id: 1, message: 'How is your React'},
//     {id: 2, message: 'Hakob how are you'},
//     {id: 3, message: 'How long you work there'},  
//     {id: 4, message: 'Can I help you'},
//     {id: 5, message: 'Thats great'},
//     {id: 6, message: 'yo'},  
// ]


const Dialogs= (props) => {

    let DialogsElement = props.state.dialogs.map( d => 
        <DialogItem name={d.name} id={d.id} />
        );
    let MessagesElement = props.state.messages.map( m => 
        <Message message={m.message} />
    );

    let newMessageElement = React.createRef()

    
    let addMeassage = () => {
    let newmessage = newMessageElement.current.value;
    alert (newmessage)
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
                {MessagesElement}
                <div>
                    <textarea ref={newMessageElement} value='it' />
                    <button onClick={ addMeassage }>Add post</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs
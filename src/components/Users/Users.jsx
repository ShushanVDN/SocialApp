import React from 'react'
import styles from './Users.module.css'


let Users= (props) =>{
if(props.users.length === 0){
    props.setUsers([
    {id: 1, photoUrl:"../../images/12.jpg", followed: false, fullName: 'Dmitriy', status: 'I am a developer', location: { city:'Minsk', country:'Belarus'} },
    {id: 2, photoUrl:"../../images/12.jpg", followed: false,  fullName: 'Sasha', status: 'I am a teacher', location: { city:'Moscow', country:'Russia'} },
  {id: 3, photoUrl:"../../images/12.jpg", followed: true,  fullName: 'Anna', status: 'I am a dremer', location: { city:'Minsk', country:'ARmenia'} }
       
])
}
    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div >
                    <img src={ u.photoUrl } alt='' className={styles.usersPhoto} />
                </div>
                <div>
                        { u.followed ? 
                        <button onClick={() => {props.unfollow(u.id) }}>Unollow</button> :
                        <button onClick={() => {props.follow(u.id) }}>follow</button> 
                        }
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {u.fullName}
                    </div>
                    <div>
                        {u.status}   
                    </div>
                </span>
                <span>
                    <div>
                        {u.location.country}
                    </div>
                    <div>
                        {u.location.city} 
                    </div>
                </span>
            </span>
            </div>)
        }

    </div>
}

export default Users
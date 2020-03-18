import React from 'react'
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../images/12.jpg'



class Users extends React.Component {
    // constructor (props){
    //     super(props);

    //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //     .then(response => {
    //         this.props.setUsers(response.data.items)})
    //     }
        componentDidMount(){
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)})
        }

    // getUsers = () =>{
    //     if(this.props.users.length === 0){
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(response => {
    //                 this.props.setUsers(response.data.items)
    //             })
    // }
    //} 
    render(){
        return <div>
        {/* <button onClick={this.getUsers} >getUsers</button> */}
        {
            this.props.users.map(u => <div key={u.id}>
            <span>
                <div >
                    <img src={ u.photos.small != null ? u.photos.small : userPhoto } alt='' className={styles.usersPhoto} />
                </div>
                <div>
                        { u.followed ? 
                        <button onClick={() => {this.props.unfollow(u.id) }}>Unollow</button> :
                        <button onClick={() => {this.props.follow(u.id) }}>follow</button> 
                        }
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}   
                    </div>
                </span>
                <span>
                    <div>
                        {/* {u.location.country} */}
                    </div>
                    <div>
                        {/* {u.location.city}  */}
                    </div>
                </span>
            </span>
            </div>)
        }
    </div>
    }
    } 
    
    
export default Users
import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../images/306473.png'
import {NavLink} from 'react-router-dom';
//import * as axios from "axios";
import {usersAPI as userAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={`${props.currentPage === p && styles.selectedPage} `}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {/* <button onClick={this.getUsers} >getUsers</button> */}
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=''
                             className={styles.usersPhoto}/>
                    </NavLink>
                </div>
                <div className={styles.userInfo}>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                //     withCredentials: true,
                                //     headers: {
                                //         'API-KEY': '27a91fcb-ca8c-492b-8f73-7b6737a6069f'
                                //     }
                                // })
                                //     .then(data => {
                                //         if (data.data.resultCode === 0) {
                                //             props.unfollow(u.id)
                                //         }
                                //         props.toggleFollowingProgress(false, u.id)
                                //
                                //     })
                                userAPI.unfollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)

                                })
                                //props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                //     withCredentials: true,
                                //     headers: {
                                //         'API-KEY': '27a91fcb-ca8c-492b-8f73-7b6737a6069f'
                                //     }
                                // })
                                //         .then(response => {
                                //             if (response.data.resultCode === 0) {
                                //                 props.follow(u.id)
                                //             }
                                //             props.toggleFollowingProgress(false, u.id)
                                //
                                //         })
                                // })
                                userAPI.follow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id)

                                })
                                //props.follow(u.id)
                            }}>Follow</button>
                        }
                </div>
            </span>
                <span className={styles.userName}>
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

export default Users


// <button onClick={() => {
//     usersAPI.setFollow(u.id)
//         .then(data => {
//             if (data.resultCode === 0) {
//                 props.unfollow(u.id)
//             }
//         })
//     //props.unfollow(u.id)
// }}>Unfollow</button> :
// <button onClick={() => {

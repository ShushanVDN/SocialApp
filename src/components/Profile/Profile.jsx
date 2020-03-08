import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    // const posts = [
    //     {id: 1, message: 'How are you', likesCount: 12},
    //     {id: 2, message: 'What is your name', likesCount: 17},
    //     {id: 3, message: 'This is my first post', likesCount: 20},  
    //     {id: 4, message: 'I receive some projecs', likesCount: 7},
    //     {id: 5, message: 'I like coding', likesCount: 65},
    //     {id: 6, message: 'yeaaahh', likesCount: 14},  
    // ]

    return (
    <div className='app-wrapper-content'>
        <ProfileInfo  />
        <MyPosts posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch} />
    </div>
    )
};

export default Profile

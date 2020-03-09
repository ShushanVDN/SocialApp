import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return (
    <div className='app-wrapper-content'>
        <ProfileInfo  />
        {/*<MyPostsContainer  posts={props.profilePage.posts}*/}
        {/*        newPostText={props.profilePage.newPostText}*/}
        {/*        dispatch={props.dispatch} />*/}
        <MyPostsContainer />
    </div>
    )
};

export default Profile

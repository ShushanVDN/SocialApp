import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreeator, updateNewTextActionCreator} from "../../../redux/profilePage";



const MyPosts = (props) => {

    let PostsElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreeator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewTextActionCreator(text)
        props.dispatch(action)

    };

    return (
        <div className={classes.posts}>
            MY POSTS
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={addPost}>Add post</button>
            </div>
            {/* <Post message={postData[0].message} likesCount={postData[0].likesCount} />
            <Post message={postData[1].message} likesCount={postData[1].likesCount} />
            <Post message={postData[2].message} likesCount={postData[2].likesCount} />
            <Post message={postData[3].message} likesCount={postData[3].likesCount} />
            <Post message={postData[4].message} likesCount={postData[4].likesCount} />
            <Post message={postData[5].message} likesCount={postData[5].likesCount} /> */}
            {PostsElements}
        </div>
    )
}


export default MyPosts

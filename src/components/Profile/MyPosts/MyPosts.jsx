import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {

    let PostsElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    return (
        <div className={classes.posts}>
            MY POSTS
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
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

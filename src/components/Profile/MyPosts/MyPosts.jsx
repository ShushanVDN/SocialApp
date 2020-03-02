import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts= (props) => { 
    // const posts = [
    //     {id: 1, message: 'How are you', likesCount: 12},
    //     {id: 2, message: 'What is your name', likesCount: 17},
    //     {id: 3, message: 'This is my first post', likesCount: 20},  
    //     {id: 4, message: 'I receive some projecs', likesCount: 7},
    //     {id: 5, message: 'I like coding', likesCount: 65},
    //     {id: 6, message: 'yeaaahh', likesCount: 14},  
    // ]

let PostsElements = props.posts.map(p => 
    <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

let newPostElement = React.createRef(); 

let addPost =  () => {
    let text = newPostElement.current.value;
    props.addPost(text)
    newPostElement.current.value = ''
}

    return (
        <div>
            MY POSTS
            <div className={classes.posts}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={ addPost }>Add post</button>
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
};

export default MyPosts
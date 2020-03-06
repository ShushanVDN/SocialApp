import React from 'react'
import classes from './Post.module.css'



const Post= (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCa1ZBK9UzhAtyz5E7fa9qMJ6DZlO1JLjh2GX_TsUPMmGRhKpw' alt='' />
                {props.message}
                <div>
                    <span>
                        like {props.likeCount}
                    </span>
                </div>
            </div> 
        </div>
    )
};

export default Post

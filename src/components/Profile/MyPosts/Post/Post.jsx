import React from 'react'
import classes from './Post.module.css'



const Post= (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src='../../images/306473.png' alt='' />
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
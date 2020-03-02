import React from 'react'
import classes from './ProfileInfo.module.css'



const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.profileAvatar}>
                <img src="../../images/maxresdefault.jpg" alt=""/>
            </div>
            <div>
                ava +disc
            </div>
        </div>
    )
};

export default ProfileInfo
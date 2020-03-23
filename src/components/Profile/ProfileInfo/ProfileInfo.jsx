import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";



const ProfileInfo = (props) => {
    if ( !props.profile ){
        return <Preloader/>
    }

    return (
        <div >
            <div className={classes.profileImg}>
                <img src="https://i.pinimg.com/originals/c6/da/03/c6da0308991deed3af22d92065242a08.jpg" alt=""/>
            </div>
            <div className={classes.avaInfo}>
                <img src={props.profile.photos.large} alt='' />
                description
            </div>
        </div>
    )
};

export default ProfileInfo

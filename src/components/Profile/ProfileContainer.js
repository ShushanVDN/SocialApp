import React from 'react'
//import MyPostsContainer from './MyPosts/MyPostsContainer'
//import ProfileInfo from './ProfileInfo/ProfileInfo'
import Profile from "./Profile";
//import * as axios from "axios";
import {connect} from 'react-redux'
import {setUsersProfile} from '../../redux/profileReducer'
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId, {
        //     withCredentials: true,
        //     headers: {
        //         'API-KEY': '27a91fcb-ca8c-492b-8f73-7b6737a6069f'
        //     }
        // })
        //     .then(response => {
        //         this.props.setUsersProfile(response.data)
        //     })
    usersAPI.getProfile(userId)
        .then(data => {
            this.props.setUsersProfile(data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
};
let mapStateToProps = (state) => (
    {
        profile: state.profilePage.profile
    })

let withUrlDataContainerComponent = withRouter(ProfileContainer)

//export default ProfileContainer
export default connect(mapStateToProps, {setUsersProfile})(withUrlDataContainerComponent)

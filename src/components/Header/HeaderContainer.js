import React from 'react';
import Header from './Header'
//import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUsersData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    // componentDidMount() {
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //         withCredentials: true,
    //         headers: {
    //             'API-KEY': '27a91fcb-ca8c-492b-8f73-7b6737a6069f'
    //         }
    //     })
    //         .then(response => {
    //             if ( response.data.resultCode === 0 ){
    //                 let {id, email, login, isAuth} = response.data.data
    //                 this.props.setAuthUsersData(id, email, login, isAuth)
    //             }
    //         })
    // }
    componentDidMount() {
        authAPI.me()
            .then(data => {
                if ( data.resultCode === 0 ){
                    let {id, email, login, isAuth} = data.data
                    this.props.setAuthUsersData(id, email, login, isAuth)
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUsersData})(HeaderContainer)

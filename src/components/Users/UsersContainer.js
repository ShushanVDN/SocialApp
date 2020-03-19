import React from 'react'
import {connect} from 'react-redux'
import Users from './Users'
import * as axios from 'axios'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC }  from '../../redux/usersReducer'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {
    // constructor (props){
    //     super(props);

    //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //     .then(response => {
    //         this.props.setUsers(response.data.items)})
    //     }
        componentDidMount(){
            this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount) 
            })
        }
    // getUsers = () =>{
    //     if(this.props.users.length === 0){
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //             .then(response => {
    //                 this.props.setUsers(response.data.items)
    //             })
    // }
    //} 
        onPageChanged = (pageNumber) => {
            this.props.setCurrentPage(pageNumber)
            this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
        })
    }
    render(){
        return <>
        {this.props.isFetching ? <Preloader  /> : null}
        <Users setTotalUsersCount={this.props.setTotalUsersCount} 
                    pageSize={this.props.pageSize} 
                    currentPage={this.props.currentPage} 
                    onPageChanged={this.onPageChanged} 
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow} /> 
                    </>
        }
    } 
    

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }

}

let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }, 
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }, 
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
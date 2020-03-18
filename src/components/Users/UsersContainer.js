import React from 'react'
import {connect} from 'react-redux'
import Users from './Users'
import * as axios from 'axios'
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC }  from '../../redux/usersReducer'

class UsersContainer extends React.Component {
    // constructor (props){
    //     super(props);

    //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //     .then(response => {
    //         this.props.setUsers(response.data.items)})
    //     }
        componentDidMount(){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
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
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
        })
    }
    render(){
        return <Users setTotalUsersCount={this.props.setTotalUsersCount} 
        pageSize={this.props.pageSize} 
        currentPage={this.props.currentPage} 
        onPageChanged={this.onPageChanged} 
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow} /> 
        }
    } 
    

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
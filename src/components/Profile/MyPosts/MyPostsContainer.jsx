import {addPostActionCreeator, updateNewTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from 'react-redux'
//import StoreContext from "../../../StoreContext";


// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 let state = store.getState()
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreeator());
//                 };
//
//                 let onPostChange = (text) => {
//                     let action = updateNewTextActionCreator(text)
//                     store.dispatch(action)
//                 }
//
//                 return <MyPosts updateNewPostText={onPostChange()}
//                                 addPost={addPost}
//                                 posts={state.profilePage.posts}
//                                 newPostText={state.profilePage.newPostText}/>
//             }
//             }
//         </StoreContext.Consumer>)
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => { dispatch(addPostActionCreeator()) }
    }
}

export const SuperPostsMyContainer = connect(mapStateToProps, mapDispatchtoProps)(MyPosts)

export default SuperPostsMyContainer

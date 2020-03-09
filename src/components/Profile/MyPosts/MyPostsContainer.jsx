import React from 'react'
import {addPostActionCreeator, updateNewTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState()
                let addPost = () => {
                    store.dispatch(addPostActionCreeator());
                };

                let onPostChange = (text) => {
                    let action = updateNewTextActionCreator(text)
                    store.dispatch(action)
                }

                return <MyPosts updateNewPostText={onPostChange()}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>)
}

export default MyPostsContainer

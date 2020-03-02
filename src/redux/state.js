import { renderEntireTree } from "../render";

let state = {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you', likesCount: 12},
                {id: 2, message: 'What is your name', likesCount: 17},
                {id: 3, message: 'This is my first post', likesCount: 20},  
                {id: 4, message: 'I receive some projecs', likesCount: 7},
                {id: 5, message: 'I like coding', likesCount: 65},
                {id: 6, message: 'yeaaahh', likesCount: 14}
                ]},
        disalogsPage: {
            dialogs: [
                {id: 1, name: 'Anna'},
                {id: 2, name: 'Hakob'},
                {id: 3, name: 'Gohar'},                      
                {id: 4, name: 'David'},
                {id: 5, name: 'Margarita'},
                {id: 6, name: 'Robert'}  
                ],
            messages: [
                {id: 1, message: 'How is your React'},
                {id: 2, message: 'Hakob how are you'},
                {id: 3, message: 'How long you work there'},  
                {id: 4, message: 'Can I help you'},
                {id: 5, message: 'Thats great'},
                {id: 6, message: 'yo'} 
    ]}
}

export let addPost = (postMessage) => {

    let newPost ={
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}

export default state
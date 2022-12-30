import {renderEntireTree} from "../render";

export let State = {
    dialogPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Katya'},
            {id: 3, name: 'Maksim'},
            {id: 4, name: 'Olivia'},
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'What is going on!'},
            {id: 3, message: 'What time is it now?'},
            {id: 4, message: 'New movie was released.'},
        ],
    },
    profilePage: {
        allPosts: [
            {id: 1, message: 'Hello! Good day today!', likesCount: 15},
            {id: 2, message: 'What time is it now?', likesCount: 25},
            {id: 3, message: 'I bought a new car!!!', likesCount: 55},
        ]
    }
}


export let addPost = function (postMessage) {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    }
    State.profilePage.allPosts.unshift(newPost);
    renderEntireTree(State);
}

export default State
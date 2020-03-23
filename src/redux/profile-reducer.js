import {profileAPI} from "../DAL/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {id: 1, massege: "Hi meeen", likeCounter: 55},
        {id: 2, massege: "My first post", likeCounter: 16}
    ],
    newPostText: "It-kamasutra.com",
    profile: null
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: "",
                posts: [...state.posts, {id: state.posts.length + 1, massege: state.newPostText, likeCounter: 0}]
            }
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

//Actions
export const addPostActionCreator = () =>
    ({type: ADD_POST});
export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST, newText: text});
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile: profile});

//Thunks
export const getUserProfile = (userId) => {

    return (dispatch) => {
        if (!userId) {
            userId = 2;
        }
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}


export default profileReducer;
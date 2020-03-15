const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    idUser: null,
    email: null,
    login: null,
    isAuth: false
};


const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export const setUserData = (idUser, email, login) =>
    ({type: SET_USER_DATA, data: {idUser, email, login}});


export default authReduser;
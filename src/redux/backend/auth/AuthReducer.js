import * as Types from "../Types";

// Initial state
const initialState = {
    isLoggedIn: false,
    authUserData: {},
    authTokenData: {},
    loginMessage: "",
    registerMessage: "",
    isLoading: false,
    submitLogout:false
};

const AuthReducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case Types.AUTH_LOGIN_CHECK:
            return {
                ...state,
                isLoggedIn: action.payload.status,
                authUserData: action.payload.userData,
                authTokenData: action.payload.access_token,
                loginMessage: action.payload.message,
                isLoading: action.payload.isLoading
            };
        case Types.AUTH_REGISTER_SUBMIT:
            return {
                ...state,
                isLoggedIn: action.payload.status,
                authUserData: action.payload.userData,
                authTokenData: action.payload.access_token,
                registerMessage: action.payload.message,
                isLoading: action.payload.isLoading
            };
        case Types.AUTH_GET_LOGIN_DATA:
            const authTokenData =
                JSON.parse(localStorage.getItem("access_token")) || "undefined";
            const authUserData = localStorage.getItem("userData");

            let isLogged = state.isLoggedIn;
            if (typeof authTokenData != "undefined") {
                isLogged = authTokenData.success;
            }

            return {
                ...state,
                isLoggedIn: isLogged,
                authUserData: authUserData,
                authTokenData: authTokenData
            };
        case Types.GET_AUTH_DATA:
            return {
                ...state,
                isLoggedIn: action.payload.status,
                authUserData: action.payload.userData,
                authTokenData: action.payload.access_token,
            };

        case Types.LOGOUT_AUTH:
            return {
                ...state,
                isLoggedIn: action.payload.status,
                authUserData: action.payload.userData,
                authTokenData: action.payload.access_token,
                submitLogout: true
            };
        case Types.AUTH_POST_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                authTokenData: {},
                authUserData: {},
                loginMessage: "",
                isLoading: false
            };
        default:
            break;
    }
    return newState;
};

export default AuthReducer;

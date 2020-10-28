import * as Types from "../Types";

// Initial state
const initialState = {
    postList: [],
    isLoading: false,

    postAddStatus: false,
    postAddMessage: "",

    postUpdateStatus: false,
    postUpdateMessage: ""
};

const PostReducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case Types.POST_LIST:
            return {
                ...state,
                postList: action.payload.data
            };
        case Types.POST_CREATE:
            return {
                ...state,
                postAddStatus: action.payload.status,
                postAddMessage: action.payload.message,
                isLoading: action.payload.isLoading
            };
        case Types.POST_SHOW:
            return {
                ...state,
                postList: [],
                isLoading: false,
                postAddStatus: false,
                postAddMessage: "",
                postUpdateStatus: false,
                postUpdateMessage: ""
            };
        case Types.POST_UPDATE:
            return {
                ...state,
                postList: [],
                isLoading: false,
                postAddStatus: false,
                postAddMessage: "",
                postUpdateStatus: false,
                postUpdateMessage: ""
            };
        case Types.POST_DELETE:
            return {
                ...state,
                postList: [],
                isLoading: false,
                postAddStatus: false,
                postAddMessage: "",
                postUpdateStatus: false,
                postUpdateMessage: ""
            };
        default:
            break;
    }
    return newState;
};

export default PostReducer;

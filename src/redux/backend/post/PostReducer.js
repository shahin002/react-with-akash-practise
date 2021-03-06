import * as Types from "../Types";

// Initial state
const initialState = {
    postList: [],
    isLoading: false,

    postAddStatus: false,
    postAddMessage: "",

    postUpdateStatus: false,
    postUpdateMessage: "",

    postDeleteStatus: false,
    postDeleteMessage: "",
    postData: {
        id: 0,
        title: '',
        body: ''
    }
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
                postData: action.payload.data,
            };

        case Types.CHANGE_POST_INPUT:
            const postData = {...state.postData };
            postData[action.payload.name] = action.payload.value;
            return {
                ...state,
                postData
            };
        case Types.POST_DELETE:
            const deletedID=action.payload.data;
            const updatedPostList = state.postList.filter((x) => x.id != deletedID);
            return {
                ...state,
                postList: updatedPostList,
                postDeleteStatus: action.payload.status,
                postDeleteMessage: action.payload.message,
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
        default:
            break;
    }
    return newState;
};

export default PostReducer;

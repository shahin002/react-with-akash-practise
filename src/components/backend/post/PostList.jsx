import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Swal from 'sweetalert2';
import {deletePostAction, getPostAction} from "../../../redux/backend/post/PostAction";

const PostList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.post.isLoading);
    const postList = useSelector((state) => state.post.postList);

    useEffect(() => {
        dispatch(getPostAction());
    },[]);
    const editPost=(post)=>{
        console.log('post',post);
    }
    const deletePost=(id)=>{
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            showConfirmButton: true,
            confirmButtonText: 'Yes, Delete',
            showCancelButton: true,
            cancelButtonText: 'No'
        },function(isConfirm){
            if (isConfirm){
                dispatch(deletePostAction(id));
            }
        })
    }
    return (
        <>
            {
                isLoading &&
                <div>
                    <i className="fa fa-spinner"></i>
                </div>
            }
            {
                !isLoading &&
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        postList.map((post, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <button className="btn btn-sanger" onClick={()=>editPost(post)}>
                                        <i className="fa fa-edit"></i>
                                    </button>
                                    <button className="btn btn-sanger" onClick={()=>deletePost(post.id)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            }
        </>
    );
};

export default PostList;

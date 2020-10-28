import React from 'react';
import PostList from "../../../components/backend/post/PostList";
import MainLayout from "../../../components/backend/layouts/base-content/MainLayout";

const PostListContainer = () => {
    return (
        <MainLayout>
            <>
                <div className="block">
                    <div className="block-content">
                        <div className="block-header">
                            <h3 className="block-title col-md-6">Post List</h3>
                            <a href="/posts/create" className="pull-right btn btn-primary btn-rounded">Add
                                Post
                            </a>
                        </div>

                        <PostList/>
                    </div>
                </div>
            </>
        </MainLayout>
    );
};

export default PostListContainer;

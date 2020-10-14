import React from 'react';
import PostList from "../../../components/backend/post/PostList";
import MainLayout from "../../../components/backend/layouts/base-content/MainLayout";

const PostListContainer = () => {
    return (
        <MainLayout>
            <PostList />
        </MainLayout>
    );
};

export default PostListContainer;

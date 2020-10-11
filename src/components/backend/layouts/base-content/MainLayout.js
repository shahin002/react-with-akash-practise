import React from 'react';

const MainLayout = (props) => {
    return (
        <>
            <div id="page-container" className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed">
                {props.children && props.children}
            </div>

        </>
    );
}

export default MainLayout;

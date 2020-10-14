import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import PageHeader from "../page-header/PageHeader";
import Footer from "../footer/Footer";

const MainLayout = (props) => {
    return (
        <>
            <div id="page-container"
                 className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed">
                <Sidebar/>
                <PageHeader/>
                <main id="main-container">
                    <>
                        {props.children && props.children}
                    </>

                </main>
                <Footer/>

            </div>

        </>
    );
}

export default MainLayout;

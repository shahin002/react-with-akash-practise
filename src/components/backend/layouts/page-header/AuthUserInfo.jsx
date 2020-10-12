import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getAuthenticatedProfileInformationAction} from "../../../../redux/backend/auth/AuthAction";

const AuthUserInfo = (props) => {
    const dispatch = useDispatch();
    const authUserData = useSelector((state) => state.auth.authUserData);
    const {isAvatar, isName} = props;
    console.log("authUserData",authUserData);
    useEffect(() => {
        dispatch(getAuthenticatedProfileInformationAction());
    }, []);
    return (
        <>
            {
                typeof authUserData != 'undefined' && authUserData != null &&
                (
                    <>
                        {
                            isAvatar && isAvatar === true &&
                            <img className="rounded" src="/assets/dashboard/media/avatars/avatar10.jpg"
                                 alt="Header Avatar"
                                 style={{width: 18}}/>
                        }
                        {
                            isName && isName === true &&
                            <span className="d-none d-sm-inline-block ml-1">{authUserData.name}</span>
                        }
                    </>
                )
            }
        </>
    );
};

export default AuthUserInfo;

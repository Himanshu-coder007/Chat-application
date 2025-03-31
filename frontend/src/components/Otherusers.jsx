import React from 'react'
import OtherUser from './Otheruser';
import useGetOtherUsers from '../hooks/useGetOtherUser';
import {useSelector} from "react-redux";

const OtherUsers = () => {
    useGetOtherUsers();
    const {otherUsers} = useSelector(store => store.user);
    
    // Better null/undefined check and ensure it's an array
    if (!Array.isArray(otherUsers)) {
        return (
            <div className='overflow-auto flex-1'>
                <p>No users found or loading...</p>
            </div>
        );
    }

    return (
        <div className='overflow-auto flex-1'>
            {otherUsers.length > 0 ? (
                otherUsers.map((user) => (
                    <OtherUser key={user._id} user={user} />
                ))
            ) : (
                <p>No other users available</p>
            )}
        </div>
    );
};

export default OtherUsers;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserData from './UserData';

const User = () => {
    const [userData, setUserData] = useState([]);

    const url = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setUserData(response.data)
            })
    }, [])

    return (
        <div className='max-w-screen-xl mx-auto mt-24'>
            <h2 className="text-center text-3xl uppercase font-bold text-purple-900 sm:text-4xl">
                All Fetching  Data...<br />
                <span className='text-2xl normal-case'>Total {userData.length}</span>
            </h2>
            <div className='user_container grid grid-cols-2 gap-5  mt-24'>
                {userData.map((data =>
                    <UserData data={data}></UserData>
                ))}
            </div>
        </div>
    );
};

export default User;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [users, setUsers] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])
    const {name} = users;
    return (
        <div>
            <h1>This is friend details: {friendId}</h1>
            <h1>{name}</h1>
        </div>
    );
};

export default FriendDetail;
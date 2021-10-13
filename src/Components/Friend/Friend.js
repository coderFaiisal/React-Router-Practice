import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name, email, id} = props.friend;
    return (
        <div className="friend-style">
            <h2>Name: {name}</h2>
            <h3>Email: {email}</h3>
            <h3><Link to={`/friend/${id}`} >Friend Details</Link></h3>
            
        </div>
    );
};

export default Friend;
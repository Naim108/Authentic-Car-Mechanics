import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId}=useParams()
    const [friend,setFriend]=useState([])
    const history=useHistory()
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    const handleClick=()=>{
        history.push('/friends')
    }
    return (
        <div className="container mt-3">
            <h1> I am {friend.name}</h1>
            <p>My contact number is {friend.phone}</p>
            <p>My address is {friend.address?.street}, {friend.address?.suite} , {friend.address?.city}</p>
            <button onClick={handleClick}>See all friends</button>
        </div>
    );
};

export default FriendDetail;
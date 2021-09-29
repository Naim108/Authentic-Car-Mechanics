import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {

    const [friends,setFriends]=useState([])
    const url='https://jsonplaceholder.typicode.com/users'

    
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <Row xs={1} md={2} lg={3} className="g-3 mx-auto container mt-5">
            {
               friends.map(friend=><Friend friend={friend}></Friend>)
            }
            </Row>
        
    );
};

export default Friends;
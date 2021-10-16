import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png'
import './Found.css'

const Found = () => {
    return (
        <div className="images">
            <img src={notFound} alt="" />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default Found;
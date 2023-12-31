import React from 'react';
import Counter from "../components/Counter";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const navigate = useNavigate()

    return (
        <div className='main'>
            <Counter/>
            <button onClick={() => navigate('/points-counter/admin')} className='admin-btn'>Admin</button>
        </div>
    );
};

export default Main;
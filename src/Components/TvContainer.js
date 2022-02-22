import tv from '../images/tv.jpg';
import React from 'react';
import {buyTv} from '../Redux/Tv/actionTv'
import { useSelector, useDispatch } from 'react-redux';

const TvContainer = () => {
    const televisions = useSelector((state) => state.television.tv
    )

    const dispatch = useDispatch();
    return (
        <div className='container'>
            <img src={tv} alt="" />

            <p>
                Available:
                <span id='count'>{televisions}</span>
            </p>
            <button onClick={() => dispatch(buyTv())}>Acheter</button>
        </div>
    );
};

export default TvContainer;
import tv from '../images/tv.jpg';
import React, { useState } from 'react';
import {buyTv} from '../Redux/Tv/actionTv'
import { useSelector, useDispatch } from 'react-redux';

const TvContainer = () => {
    const [totalTv, setTotalTv] = useState(0)
    const televisions = useSelector((state) => state.television.tv
    )
    const dispatch = useDispatch(totalTv);
    return (
        <div className='container'>
            <img src={tv} alt="" className='tv-image'/>

            <p>
                Available:
                <span id='count'> {televisions}</span>
            </p>
            <div>
                <button onClick={() => dispatch(buyTv(totalTv))}>Acheter</button>
            <input type="text" value={totalTv} onChange={(e) => setTotalTv(e.target.value)} />
            </div>

            
        </div>
    );
};

export default TvContainer;
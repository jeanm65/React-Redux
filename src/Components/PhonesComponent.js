import React from 'react';
import phone from '../images/phone.jpg'

const PhonesComponent = () => {
    return (
        <div className='container'>
            <img src={phone} alt="phone" />
            <p>
                Available:
                <span id='count'></span>
            </p>
            <button>Acheter</button>
        </div>
    );
};

export default PhonesComponent;
import React from 'react';
import { connect } from 'react-redux';
import phone from '../images/phone.jpg'

const PhonesComponent = ({phones}) => {
    return (
        <div className='container'>
            <img src={phone} alt="phone" />
            <p>
                Available:
                <span id='count'>{phones}</span>
            </p>
            <button>Acheter</button>
        </div>
    );
};

const mapStateToProps = (state) => {
  return {
       phones:state.phones
  }
}

export default connect(mapStateToProps)(PhonesComponent);
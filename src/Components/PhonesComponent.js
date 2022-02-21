import React from 'react';
import { connect } from 'react-redux';
import phone from '../images/phone.jpg';
import {buyPhone} from '../Redux/Phone/actionPhone';


const PhonesComponent = ({buyPhone, phones}) => {
    return (
        <div className='container'>
            <img src={phone} alt="phone" />
            <p>
                Available :
                <span id='count'> {phones}</span>
            </p>
            <button onClick={() => buyPhone()}>Acheter</button>
        </div>
    );
};

const mapStateToProps = (state) => {
  return {
       phones:state.phones
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: () => {
      dispatch(buyPhone())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhonesComponent);
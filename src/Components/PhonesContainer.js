import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import phone from '../images/phone.jpg';
import {buyPhone} from '../Redux/Phone/actionPhone';


const PhonesContainer = () => {
    // the equivalent hook of useStateToProps is useSelector
    const phones = useSelector((state) => state.phone.phones
    )

    const [totalPhone, setTotalPhone ] = useState(1)

    const dispatch = useDispatch(totalPhone)
    return (
        <div className='container'>
            <img src={phone} alt="phone" />
            <p>
                Available :
                <span id='count'> {phones} </span>
            </p>

            <div className="btnContainer">
            <button onClick={() => dispatch(buyPhone(totalPhone))}>Acheter</button>
            <input type="text" value={totalPhone} onChange={(e) => setTotalPhone(e.target.value)} />

            </div>
            
        </div>
    );
};

// const mapStateToProps = (state) => {
//   return {
//        phones:state.phones
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyPhone: () => {
//       dispatch(buyPhone())
//     }
//   } 
// }

export default PhonesContainer;


// import React from 'react';
// import { connect } from 'react-redux';
// import phone from '../images/phone.jpg';
// import {buyPhone} from '../Redux/Phone/actionPhone';


// const PhonesComponent = ({buyPhone, phones}) => {
//     return (
//         <div className='container'>
//             <img src={phone} alt="phone" />
//             <p>
//                 Available :
//                 <span id='count'> {phones}</span>
//             </p>
//             <button onClick={() => buyPhone()}>Acheter</button>
//         </div>
//     );
// };

// const mapStateToProps = (state) => {
//   return {
//        phones:state.phones
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     buyPhone: () => {
//       dispatch(buyPhone())
//     }
//   } 
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PhonesComponent);
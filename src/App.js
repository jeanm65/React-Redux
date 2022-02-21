import PhonesComponent from "./Components/PhonesComponent";
import store from "./Redux/store";
import { Provider } from "react-redux";
import './App.css';

function App() {
  return (
    //
    <Provider store={store}>
      <h1>Notre application</h1>
    <div className="big-container">
      <PhonesComponent />
    </div>
    </Provider>
  );
}

export default App;

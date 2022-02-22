import PhonesContainer from "./Components/PhonesContainer";
import TvContainer from "./Components/TvContainer";
import store from "./Redux/store";
import { Provider } from "react-redux";
import './App.css';

function App() {
  return (
    //
    <Provider store={store}>
      <h1>Notre application</h1>
    <div className="big-container">
      <PhonesContainer />
      <TvContainer />
    </div>
    </Provider>
  );
}

export default App;

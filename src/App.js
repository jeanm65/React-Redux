import PhonesComponent from "./Components/PhonesComponent";
import store from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    //
    <Provider store={store}>
    <div className="App">
      <PhonesComponent />
    </div>
    </Provider>
  );
}

export default App;

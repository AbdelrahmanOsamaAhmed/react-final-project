
import "./App.css";
import Connections from "./Components/Connections";
import store from "./Store/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <Connections />
    </Provider>
  );
}

export default App;

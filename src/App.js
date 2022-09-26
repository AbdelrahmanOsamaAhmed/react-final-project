import "./App.css";
import SidePanel from "./components/side panel/sidePanel";
import Reels from "./components/Reels/Reels";
import Connections from "./Components/Connections";
import store from "./Store/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <SidePanel/>
      <Reels/>
      <Connections />
    </div>
  )



/* function App() {
  return (
    
  );
} */
}

export default App;

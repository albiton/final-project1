import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { WelcomePage } from "./components/WelcomePage";
import { Tales } from "./components/Tales";

function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomePage />
      <Tales />
    </div>
  );
}

export default App;

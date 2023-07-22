import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { WelcomePage } from "./components/WelcomePage";
import { Tails } from "./components/Tails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomePage />
      <Tails />
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './components/navbar/Navbar'
import { Home } from './components/home/Home'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;

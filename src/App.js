import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Search/>
    </div>
  );
}

export default App;

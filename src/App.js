import logo from './logo.svg';
import Navigation from './customer/components/navigation/Navigation';
import './App.css';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      
      <Navigation/>
      <div><HomePage/></div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import {data} from './dataList'

function App() {
  const random = Math.floor(Math.random()*Math.floor(data.length))
  return (
    <div className="App">
      <h1>{data[random].F1}</h1>
      <h3>{data[random].F2}</h3>
      
    </div>
  );
}

export default App;

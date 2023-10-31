import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    let [title,b]=useState('추천');
    let post ='test to test';
  return (
    <div className="App">
      <div className="black-nav">
          <h4>블로그</h4>
      </div>
        <div className="list">
            <div>{title}</div>
            <p>date</p>
        </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [input, setinput] = useState("")

  const Search = () => {
    setinput(document.getElementById('ThisIsInput').value)
  }

  return (
    <div>
      <Router>
        <Navbar SearchFunction={Search} style={{ position: "sticky" }} />
        <Routes>
          
          <Route exact path="/" element={<News key="general" api={`https://newsapi.org/v2/top-headlines?country=in&category=general&from=2022-05-30&apiKey=226712ef71db49debc939e853dd0b119&pageSize=20&page=`} />}></Route>

          <Route exact path="/business" element={<News key="business" api={`https://newsapi.org/v2/top-headlines?country=in&category=business&from=2022-05-30&apiKey=226712ef71db49debc939e853dd0b119&pageSize=20&page=`} />}></Route>

          <Route exact path="/sports" element={<News key="sports" api={`https://newsapi.org/v2/top-headlines?country=in&category=sports&from=2022-05-30&apiKey=226712ef71db49debc939e853dd0b119&pageSize=20&page=`} />}></Route>

          <Route exact path="/science" element={<News key="science" api={`https://newsapi.org/v2/top-headlines?country=in&category=science&from=2022-05-30&apiKey=226712ef71db49debc939e853dd0b119&pageSize=20&page=`} />}></Route>

          <Route exact path="/technology" element={<News key="technology" api={`https://newsapi.org/v2/top-headlines?country=in&category=technology&from=2022-05-30&apiKey=226712ef71db49debc939e853dd0b119&pageSize=20&page=`} />}></Route>

          <Route exact path="/entertainment" element={<News key="entertainment" api={`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&from=2022-05-30&apiKey=226712ef71db49debc939e853dd0b119&pageSize=20&page=`} />}></Route>

          <Route exact path="/search" element={<News key={input} api={`https://newsapi.org/v2/everything?&qInTitle=${input}&from=2022-05-30&apiKey=226712ef71db49debc939e853dd0b119&pageSize=20&page=`} />}></Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App;

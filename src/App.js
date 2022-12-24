// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchedNews from './components/SearchedNews'
import News from './components/News';
import {
  BrowserRouter as Router,
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [apikey] = useState(process.env.REACT_APP_API_KEY)
  const [input, setinput] = useState("")
  const [date] = useState(new Date())

  const Search = () => {
    const inpvalue = document.getElementById('ThisIsInput').value
    if(inpvalue){
      setinput(inpvalue)
    }
  }

  return (
    <div>
      <HashRouter>
        <Navbar SearchFunction={Search} style={{ position: "sticky" }}/>
        <Routes>
          
          <Route exact path="/" element={<News key="general" apiKey={apikey} category = {"general"} />}></Route>

          <Route exact path="/business" element={<News key="business"  category ={"business"} apiKey={apikey} />}></Route>

          <Route exact path="/sports" element={<News key="sports"  category ={"sports"} apiKey={apikey} />}></Route>

          <Route exact path="/science" element={<News key="science" category={"science"} apiKey={apikey} />}></Route>

          <Route exact path="/technology" element={<News key="technology" category={"technology"} apiKey={apikey} />}></Route>

          <Route exact path="/entertainment" element={<News key="entertainment" category={"entertainment"} apiKey={apikey} />}></Route>

          <Route exact path="/search" element={<SearchedNews key={input} input={input} apiKey={apikey} />}></Route>

        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;


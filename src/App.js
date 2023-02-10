import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";
// import Fetchdata from './components/Fetchdata';
import Header from "./components/Header";

function App() {
  const [category, setCategory] = useState("");
  const [showCategory, setShowCategory] = useState([]);

 
  

  useEffect(() => {
     const fetchApi = async () => {
    const api = `https://inshorts.deta.dev/news?category=${category}`;
    const res = await fetch(api);
    const data = await res.json();
      console.log(data.data);
    // setCategory(data)
    setShowCategory(data.data);
  };
    fetchApi();
  }, [category]);

  return (
    <div className="App">
      <Header setCategory={setCategory} />
      <Card showCategory={showCategory} />

    </div>
  );
}

export default App;

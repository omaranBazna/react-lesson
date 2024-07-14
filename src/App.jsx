import "./App.css";
import Card from "./CardComp.jsx";
import {useState,useEffect} from "react"
import Button from "@mui/material/Button";
import Navbar from "./Navbar.jsx"
import SearchFilter from "./SearchFilter";
import CardList from "./Cardlist";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

/*
npm install [name]

npm install [extension]




*/

export default function App() {

  
  const [searchQ,setSearchQ]=useState(""); /// input change

  const [cards,setCards] = useState([]) ///loading API
  const [orders,setOrders] = useState([])
  const [pricesRange, setPricesRange] = useState([500,2000]);
  
  
 

 
/*[200,1000] */
///card {price:100}


  useEffect(()=>{
    fetch("https://api.npoint.io/d7f875245ffc9671a617").then(res=>res.json()).then(data=>{
      setCards(data.cards)
      console.log(data.cards);
    })
  },[])

  return (
    <Router>
      <Routes>
      <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );

  return (
    <main style={{border:"2px solid red",height:"100vh"}}>
    <Navbar cards={cards} orders={orders} setOrders={setOrders}  />  
    
    <div style={{display:"flex",border:"2px solid green",height:"100%"}}>

      <SearchFilter searchQ={searchQ} setSearchQ={setSearchQ} pricesRange={pricesRange} setPricesRange={setPricesRange} />
      <CardList  cards={cards} pricesRange={pricesRange}  searchQ={searchQ} orders={orders} setOrders={setOrders}/>
     
     </div>
    </main>
  );


}




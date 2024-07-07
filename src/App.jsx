import "./App.css";
import Card from "./CardComp.jsx";
import {useState,useEffect} from "react"
import Button from "@mui/material/Button";
import Navbar from "./Navbar.jsx"
import SearchFilter from "./SearchFilter";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PricesSlide from "./PricesSlide.jsx"
export default function App() {

  const [upperBound,setUpperBound]=useState(4); //buttons clicks
  const [searchQ,setSearchQ]=useState(""); /// input change

  const [cards,setCards] = useState([]) ///loading API
  const [orders,setOrders] = useState([])
  const [pricesRange, setPricesRange] = useState([500,2000]);
  const [pricesRange2, setPricesRange2] = useState([500,2000]);
 
  
 
/*[200,1000] */
///card {price:100}


  useEffect(()=>{
    fetch("https://api.npoint.io/d7f875245ffc9671a617").then(res=>res.json()).then(data=>{
      setCards(data.cards)
      console.log(data.cards);
    })
  },[])


  return (
    <main style={{border:"2px solid red",height:"100vh"}}>
      <Navbar cards={cards} orders={orders} setOrders={setOrders}  />  
     <SearchFilter searchQ={searchQ} setSearchQ={setSearchQ} pricesRange={pricesRange} setPricesRange={setPricesRange} />
     <SearchFilter searchQ={searchQ} setSearchQ={setSearchQ} pricesRange={pricesRange} setPricesRange={setPricesRange} />
     <SearchFilter searchQ={searchQ} setSearchQ={setSearchQ} pricesRange={pricesRange2} setPricesRange={setPricesRange2} />

      
      
      
      {cards.filter(card=>{
        
        let price=Number(card.price.substring(1))
 
        return price>=pricesRange[0] && price<=pricesRange[1]
      }).map((card,index)=>{ {/* Can not read map of "undefined" */}
      if(index>=upperBound && searchQ=="") return<></>
       if(!card.name.includes(searchQ) && !card.description.includes(searchQ)) return <></>
      
      
       return <Card setOrders={setOrders} orders={orders} id={card.id} name={card.name} description={card.description} price={card.price} isAvailable={card.isAvailable=="true"}   />
      })}

      {searchQ==""&&<Button color="info" variant="outlined" size="small"  onClick={()=>{
        if(upperBound<cards.length){
         setUpperBound(upperBound+2)
        }
      }}>
        show more {/*change here */}
      </Button>}
       {searchQ==""&&<Button  color="info" variant="outlined" size="small" onClick={()=>{
         if(upperBound>2){
         setUpperBound(upperBound-2)
         }
      }}>
      show less {/*change here */}
      </Button>}
       
    </main>
  );
}

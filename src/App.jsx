import "./App.css";
import Card from "./CardComp.jsx";
import {useState,useEffect} from "react"
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import PricesSlide from "./PricesSlide.jsx"
import Navbar from "./Navbar.jsx"
export default function App() {

  const [upperBound,setUpperBound]=useState(4); //buttons clicks
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
    <main>
      <Navbar cards={cards} orders={orders} setOrders={setOrders}  />  
     <TextField  size="small" id="outlined-basic" label="Search" variant="outlined"  value={searchQ} placeholder="Search for item" onChange={(e)=>{
      
        setSearchQ(e.target.value)
       
     }}/>
 <PricesSlide pricesRange={pricesRange} setPricesRange={setPricesRange}/>
       
      
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

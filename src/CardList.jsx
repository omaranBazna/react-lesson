
import Card from "./CardComp"
export default function CardList({cards,pricesRange,orders,setOrders,searchQ}) {

  return (
    <div>

    {cards.filter(card=>{
        
      let price=Number(card.price.substring(1))

      return price>=pricesRange[0] && price<=pricesRange[1]
    }).map((card,index)=>{ {/* Can not read map of "undefined" */}
    
     if(!card.name.includes(searchQ) && !card.description.includes(searchQ)) return <></>
    
     
     return <Card setOrders={setOrders} orders={orders} id={card.id} name={card.name} description={card.description} price={card.price} isAvailable={card.isAvailable=="true"}   />
    })}
    
    </div>
  )
}
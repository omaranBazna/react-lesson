import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
///react code  => printing the card
//how the react code can decicde if the item is in cart or not?!

///if item in cart then (print (in cart)) else print available

///is the cart in App.jsx or in Navbar.jsx or in Card.jsx? shopping cart




export default function CardComp({setOrders,orders,id, name, description, price, isAvailable }) {

  let isInCart = (orders.find(item=>item==id) != undefined)
  let label,color
  if(!isAvailable){
    label="Sold out"
    color="orange"
  }else if(isInCart){
    label="In-Cart"
    color="red"
  }else{
    label="Available"
    color="green"
  }
  return (
    <Box sx={{ minWidth: 275, width: 200 ,margin:4 }}>
      <Card variant="outlined">
      <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 ,display:"flex",alignItems:"center"}} color="text.secondary" gutterBottom>
          { label} < FiberManualRecordIcon style={{ color: color ,height:20,width:20 }} />
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>

        <Typography color="text.secondary" variant="body2">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography color="#e65100" variant="h6"  >
          {price}
        </Typography>
      

        {isAvailable && !isInCart && <Button onClick={()=>{
           ///what will happen when we click the button
           setOrders((old_orders)=>{
              if(old_orders.find(item=>item==id))   ///order already placed
              {
                return old_orders
              }else{
                return [...old_orders,id]
              }
           })

        }}  color="warning" variant="contained" size="small">
        Add
        </Button>}
        

       



        {isAvailable && isInCart && <Button onClick={()=>{
           ///what will happen when we click the button
           setOrders((old_orders)=>{
              return old_orders.filter(item=>item!=id)
           })

        }}  color="info" variant="contained" size="small">
        Remove
        </Button>}

       
       
       
      


      </CardActions>
    </React.Fragment>
       
      </Card>
    </Box>
  );
}


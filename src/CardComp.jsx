import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const CardEl = ({ setOrders,id, name, description,price, isAvailable }) => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 ,display:"flex",alignItems:"center"}} color="text.secondary" gutterBottom>
          { isAvailable?"Available":"Sold out"} < FiberManualRecordIcon style={{ color: isAvailable?"green":"orange" ,height:20,width:20 }} />
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
      

        <Button onClick={()=>{
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
        </Button>
      </CardActions>
    </React.Fragment>
  );
};



export default function CardComp({setOrders,id, name, description, price, isAvailable }) {
  return (
    <Box sx={{ minWidth: 275, width: 200 ,margin:4 }}>
      <Card variant="outlined">
        
        <CardEl id={id} setOrders={setOrders} name={name} description={description} price={price}  isAvailable={ isAvailable}   />{" "}
      </Card>
    </Box>
  );
}


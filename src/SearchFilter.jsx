import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PricesSlide from "./PricesSlide.jsx"

function SearchFilter({searchQ,setSearchQ,pricesRange,setPricesRange}){
return  <Box 
sx={{
 border:"2px solid red",
 width:"fit-content", 
 padding:"20px", 
 margin:"20px", 
 display:"flex",
 flexDirection:"column",
 gap:"20px"

}}

> 

<TextField  size="small" id="outlined-basic" label="Search" variant="outlined"  value={searchQ} placeholder="Search for item" onChange={(e)=>{

setSearchQ(e.target.value)

}}/>
<PricesSlide pricesRange={pricesRange} setPricesRange={setPricesRange}/>


</Box>


}

export default SearchFilter
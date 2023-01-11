import { Box, Card, CardActionArea, CardContent } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import './Cleaning.css'
import AddIcon from '@mui/icons-material/Add';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PinDropIcon from '@mui/icons-material/PinDrop';
import CoffeeIcon from '@mui/icons-material/Coffee';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

function Cleaning() {
  return (
  
    <div className='backGround'>
<Box className='container-xl container-lg container-md contaiber-sm container-xs text-center'>
  
<Box display={"flex"} flexDirection={"column"}>

     <Typography  paddingTop={3} sx={{color:"#13287d", fontSize:"50px", fontWeight:600}}>
      Cleaning Options to Fit Your Needs
     </Typography>
     <Typography  sx={{color:"#289e64", fontSize:"20px", fontWeight:600}}>
     Trained Employees
     </Typography>
     </Box>



     {/* Cards I */}


<Box display={"flex"} flexDirection={"row"} justifyContent="center" marginTop={5}>
  <Box marginRight={1}>
<Card sx={{  maxWidth:420  , padding:"23px" }}>
      <CardActionArea>
     <CardGiftcardIcon  fontSize='large' sx={{fontSize:"100px" , color:"#289e64"}} />
        <CardContent>
          <Box  display={"flex"}
            flexDirection={"column"}>
          <Typography sx={{color: "#13287d" , fontWeight:600}}>All supplies</Typography>
          <Typography sx={{color: "#13287d" , fontWeight:600}}>included</Typography>
          </Box>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          Cras tempus consectetur venenatis.
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          Quisque porttitor iaculis rutrum. Proin
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          sed massa euimod, viverra lacus a,
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          pellentesque
          </Typography>
          <Typography variant="body2" marginTop={3}  sx={{color: "#13287d" , fontWeight:600, fontSize:"12px"}}>
           More Deatils <AddIcon  sx={{marginLeft:"20px"}}/>
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Box>

    {/* Card2 */}

<Box marginRight={1}  >
<Card sx={{  maxWidth:420  , padding:"23px" }}>
      <CardActionArea>
     <CardGiftcardIcon  fontSize='large' sx={{fontSize:"100px" , color:"#289e64"}} />
        <CardContent>
          <Box  display={"flex"}
            flexDirection={"column"}>
          <Typography sx={{color: "#13287d" , fontWeight:600}}>Bonded &</Typography>
          <Typography sx={{color: "#13287d" , fontWeight:600}}>insured</Typography>
          </Box>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          Cras tempus consectetur venenatis.
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          Quisque porttitor iaculis rutrum. Proin
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          sed massa euimod, viverra lacus a,
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          pellentesque
          </Typography>
          <Typography variant="body2" marginTop={3}  sx={{color: "#13287d" , fontWeight:600, fontSize:"12px"}}>
           More Deatils <AddIcon  sx={{marginLeft:"20px"}}/>
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Box>

    {/* Card3 */}

<Box marginRight={1}>
<Card sx={{ maxWidth: 420 , padding:"23px" }}>
      <CardActionArea>
      <AccessTimeIcon fontSize='large' sx={{fontSize:"100px" , color:"#289e64"}}  />
        <CardContent>
        <Box  display={"flex"}
            flexDirection={"column"}>
          <Typography sx={{color: "#13287d", fontWeight:600}}>Book & pay</Typography>
          <Typography sx={{color: "#13287d" , fontWeight:600}}>online</Typography>
 
          </Box>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          Cras tempus consectetur venenatis.
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          Quisque porttitor iaculis rutrum. Proin
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          sed massa euimod, viverra lacus a,
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          pellentesque
          </Typography>
          <Typography variant="body2" marginTop={3}  sx={{color: "#13287d" , fontWeight:600, fontSize:"12px"}}>
           More Deatils <AddIcon  sx={{marginLeft:"20px"}}/>
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card>
    </Box>
    </Box>

    




     

     {/* Cards II */}
{/* Card1 */}

<Box display={"flex"} flexDirection={"row"} justifyContent="center" marginTop={3}>
  <Box marginRight={1}>
<Card sx={{ maxWidth: 420 , padding:"25px" }}>
      <CardActionArea>
      <PinDropIcon  fontSize='large' sx={{fontSize:"100px" , color:"#289e64"}} />
        <CardContent>
      
          <Typography sx={{color: "#13287d" , fontWeight:600}}>No hidden fees</Typography>
    
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          Cras tempus consectetur venenatis.
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          Quisque porttitor iaculis rutrum. Proin
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          sed massa euimod, viverra lacus a,
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          pellentesque
          </Typography>
          <Typography variant="body2" marginTop={3}  sx={{color: "#13287d" , fontWeight:600, fontSize:"12px"}}>
           More Deatils <AddIcon  sx={{marginLeft:"20px"}}/>
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Box>

    {/* Card2 */}


<Box marginRight={1}>
<Card sx={{ maxWidth: 420 , padding:"25px"  }}>
      <CardActionArea>
      <CoffeeIcon  fontSize='large' sx={{fontSize:"100px", color:"#289e64"}}  />
        <CardContent>

  
          <Typography sx={{color: "#13287d" , fontWeight:600}}>Scrubs & disinfect</Typography>


          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          Cras tempus consectetur venenatis.
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          Quisque porttitor iaculis rutrum. Proin
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          sed massa euimod, viverra lacus a,
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          pellentesque
          </Typography>
          <Typography variant="body2" marginTop={3}  sx={{color: "#13287d" , fontWeight:600, fontSize:"12px"}}>
           More Deatils <AddIcon  sx={{marginLeft:"20px"}}/>
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
    </Box>

    {/* Card3 */}

<Box marginRight={1}>
<Card sx={{ maxWidth: 420 , padding:"25px" }}>
      <CardActionArea>
      <SettingsSuggestIcon fontSize='large' sx={{fontSize:"100px", color:"#289e64"}} />
        <CardContent>
     
          <Typography sx={{color: "#13287d", fontWeight:600}}>Toilet & bath</Typography>
        
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          Cras tempus consectetur venenatis.
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          Quisque porttitor iaculis rutrum. Proin
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          sed massa euimod, viverra lacus a,
          </Typography>
          <Typography gutterBottom  marginTop={1} component="div" sx={{color: "grey" , fontWeight:400, fontSize:"12px"}}>
          pellentesque
          </Typography>
          <Typography variant="body2" marginTop={3}  sx={{color: "#13287d" , fontWeight:600, fontSize:"12px"}}>
           More Deatils <AddIcon  sx={{marginLeft:"20px"}}/>
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card>
    </Box>
    </Box>

     </Box>

      </div>
   
  )
}

export default Cleaning
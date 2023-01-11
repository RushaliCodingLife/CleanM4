import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

function Office() {
  return (
    <div>

<Box
            display={"flex"}
            flexDirection={"row"}
            className="text-center mt-5"
            justifyContent={"center"}
          >
    {/* Cards */}
    {/* Card1 */}
  
    <Card sx={{ maxWidth: 420, marginRight:"20px" }}>
          <CardActionArea>
          <img
                  src={require("../Util/Images/2.jpg")}
                  alt="image"
                  width="400px"
                  height="300px"
                />
            <CardContent>
              <Box  display={"flex"}
                flexDirection={"row"}>
              <Typography sx={{color: "#13287d" , fontWeight:600}}>Office Cleaning</Typography>
              <Typography className="ms-2"  sx={{color: "#b7b6b9"}}>/July 10, 2020</Typography>
              </Box>
              <Typography gutterBottom variant="h6"  marginTop={1} component="div" sx={{color: "#13287d" , fontWeight:600}}>
              The To 20 Cleaning Tips
              </Typography>
              <Typography variant="body2" marginTop={3}  sx={{color: "#13287d" , fontWeight:600}}>
               Read More <AddIcon  sx={{marginLeft:"55px"}}/>
              </Typography>
            </CardContent>
          </CardActionArea>
         
        </Card>
    
        {/* Card2 */}
    {/* Cards */}
    {/* Card1 */}
    <Card sx={{ maxWidth: 420 , marginRight:"20px" }}>
          <CardActionArea>
          <img
                  src={require("../Util/Images/3.jpg")}
                  alt="image"
                  width="400px"
                  height="300px"
                />
            <CardContent>
            <Box  display={"flex"}
                flexDirection={"row"}>
              <Typography sx={{color: "#13287d" , fontWeight:600}}>House Cleaning</Typography>
              <Typography className="ms-2"  sx={{color: "#b7b6b9"}}>/July 15, 2020</Typography>
              </Box>
              <Typography gutterBottom variant="h6"  marginTop={1} component="div" sx={{color: "#13287d" , fontWeight:600}}>
              The Top 30 Cleaning Agents
              </Typography>
              <Typography variant="body2" marginTop={3} sx={{color: "#13287d" , fontWeight:600}}>
               Read More <AddIcon  sx={{marginLeft:"55px"}}/>
              </Typography>
            </CardContent>
          </CardActionArea>
    
        </Card>
    
        {/* Card3 */}
    {/* Cards */}
    {/* Card1 */}
    <Card sx={{ maxWidth: 420 , marginRight:"20px" }}>
          <CardActionArea>
          <img
                  src={require("../Util/Images/4.jpg")}
                  alt="image"
                  width="400px"
                  height="300px"
                />
            <CardContent>
            <Box  display={"flex"}
                flexDirection={"row"}>
              <Typography sx={{color: "#13287d", fontWeight:600}}>Carpet Cleaning</Typography>
              <Typography className="ms-2"  sx={{color: "#b7b6b9"}}>/July 20, 2020</Typography>
              </Box>
              <Typography gutterBottom variant="h6" marginTop={1} component="div" sx={{color: "#13287d" , fontWeight:600}}>
               Spring cleaning services
              </Typography>
              <Typography variant="body2"marginTop={3}  sx={{color: "#13287d" , fontWeight:600}}>
               Read More <AddIcon sx={{marginLeft:"55px"}}/>
              </Typography>
            </CardContent>
          </CardActionArea>
       
        </Card>
    </Box>
            </div>
        
  )
}

export default Office
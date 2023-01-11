import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {Link} from "react-router-dom"
import './NavBar.css'

export default function ButtonAppBar() {
  return (
    // 1 NavBar

    <>
      <Box>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box>
              <IconButton>
                <FacebookIcon fontSize="large"  />
              </IconButton>
              <IconButton>
                <InstagramIcon fontSize="large"  />
              </IconButton>
              <IconButton>
                <YouTubeIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <LinkedInIcon fontSize="large"/>
              </IconButton>
            </Box>
            <Box>
              <IconButton>
                <MailIcon  sx={{ color: "red" }} />
                <Box justifyContent={"space-between"}>
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography>If your any query:</Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography className="ms-3">info@CleanM4.com</Typography>
                  </Box>
                </Box>
              </IconButton>
              <IconButton>
                <LocalPhoneIcon sx={{ color: "lightgreen" }} />
                <Box justifyContent={"space-between"} className="ms-2">
                  <Box display={"flex"} flexDirection={"column"}>
                    <Typography>Have any question?</Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography>Free: +123655233</Typography>
                  </Box>
                </Box>
              </IconButton>
            </Box>
          </Box>
        </AppBar>
      </Box>

      {/* 2 NavBar */}
      <Box>
        <AppBar position="static" sx={{ backgroundColor: "white", padding:"10px" }}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Box flexDirection={"row"} display={"flex"}>
              <img
                src={require("../Util/Images/logo.png")}
                alt="icon"
                width="49px"
                height="49px"
              />

              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  color: "#202867",
                  fontWeight: 700,
                  marginTop: "10px",
                }}
              >
                CleanM4
              </Typography>
            </Box>



           
            <Box className="container-xl container-lg container-md container-sm container-xs ">
              <Box display={"flex"} flexDirection="row" justifyContent={"space-evenly"} marginTop={1} >

  <Typography sx={{color:"#202867" , fontWeight:600, fontSize:"20px", cursor:"pointer" }}>
    <Link to="/" className="NavItem"   >
    Home
    </Link>
    </Typography>

  <Typography sx={{color:"#202867", fontWeight:600 , fontSize:"20px" , cursor:"pointer"}}>
  <Link to="/cleaning" className="NavItem" >
    Cleaning
    </Link>
    </Typography>

  <Typography sx={{color:"#202867", fontWeight:600 , fontSize:"20px" , cursor:"pointer"}}>
    <Link to="/office" className="NavItem"  >
    Office
    </Link>
    </Typography>
  </Box>
</Box>

            <Box>
              <Button
                color="inherit"
                sx={{
                  minWidth: "150px",
                  backgroundColor: "#f57d00",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "12px",
                  height: "40px",
                  borderRadius: "30px",
                  marginTop:"3px"
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </AppBar>
      </Box>
    </>
  );
}

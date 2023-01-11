import { Box, Button, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";
import "./HomePage.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleIcon from "@mui/icons-material/People";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AddIcon from '@mui/icons-material/Add';

function HomePage() {
  return (
    <div>
      <Box
        justifyContent={"space-between"}
        className="background "
        height={"400px"}
      >
        <Box className="container-xl container-lg container-md container-sm container-xs ">
          <Box display={"flex"} flexDirection={"column"}>
            <Typography marginTop={5} sx={{ fontSize: "50px", color: "white" }}>
              We Are Making Your Office
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "50px", color: "white" }}>
              As Good As New
            </Typography>
          </Box>

          {/* 2nd paragraph */}

          <Box display={"flex"} flexDirection={"column"} className="mt-3">
            <Typography sx={{ fontSize: "15px", color: "white" }}>
              We have over 10years of experience providing cleaning services. We
              are licensed and insured. Our commitment is to customer
              satisfaction and this is why we
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "15px", color: "white" }}>
              work hard to deliver on what we promise. All of our jobs are
              operators and supervised by the owners.
            </Typography>
          </Box>

          {/* Button */}

          <Box display={"flex"}>
            <Box>
              <Button
                color="inherit"
                sx={{
                  minWidth: "150px",
                  backgroundColor: "#eff2f7",
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "12px",
                  height: "40px",
                  borderRadius: "30px",
                  marginTop: "45px",
                }}
              >
                Learn More
              </Button>
            </Box>
            <Box>
              <PlayCircleIcon
                fontSize="large"
                className="ms-4"
                sx={{ color: "white", marginTop: "40px", fontSize: "50px" }}
              />
            </Box>
            <Box>
              <Typography
                className="ms-2"
                sx={{ color: "white", marginTop: "52px", fontSize: "18px" }}
              >
                Our Vedio!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* II part */}
      <Box className="container-xl container-lg container-md container-sm container-xs mt-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-5">
            <Box display={"flex"} flexDirection="column" className="mt-5">
              <Box>
                <Typography sx={{ color: "#55b284", fontWeight: 600 }}>
                  Who we are
                </Typography>

                <Typography
                  sx={{ color: "#13287d", fontSize: "35px", fontWeight: 600 }}
                >
                  Local,
                </Typography>

                <Typography
                  sx={{ color: "#13287d", fontSize: "35px", fontWeight: 600 }}
                >
                  professinal
                </Typography>

                <Typography
                  sx={{ color: "#13287d", fontSize: "35px", fontWeight: 600 }}
                >
                  cleaners
                </Typography>

                <Typography sx={{ color: "#b7b6b9", fontWeight: 400 }}>
                  Let us take you carpets, usong organic products,
                </Typography>

                <Typography sx={{ color: "#b7b6b9", fontWeight: 400 }}>
                  stea, cleaning machine and delivering 2 hours
                </Typography>

                <Typography sx={{ color: "#b7b6b9", fontWeight: 400 }}>
                  carpets dry. Don't let your furniture feel old and dirty.
                </Typography>

                <Typography sx={{ color: "#b7b6b9", fontWeight: 400 }}>
                  We are experts in cleaning chairs, couches,
                </Typography>

                <Typography sx={{ color: "#b7b6b9", fontWeight: 400 }}>
                  armchanirs and rugs
                </Typography>
              </Box>

              <Box>
                <Button
                  color="inherit"
                  sx={{
                    minWidth: "150px",
                    backgroundColor: "#eff2f7",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "12px",
                    height: "40px",
                    borderRadius: "30px",
                    marginTop: "45px",
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-5">
            <img
              src={require("../Util/Images/1.png")}
              alt="image"
              width="300px"
              height="500px"
            />
          </div>

          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
            <Box>
              <LocalOfferIcon fontSize="large" sx={{ color: "#55b284" }} />

              <Typography
                marginTop={2}
                sx={{ color: "#13287d", fontSize: "20px", fontWeight: 600 }}
              >
                Natural Boosters
              </Typography>
              <Typography
                marginTop={2}
                sx={{ color: "#b7b6b9", fontWeight: 400 }}
              >
                Our philosophy rests on the idea that natural
              </Typography>

              <Typography sx={{ color: "#b7b6b9", fontWeight: 400 }}>
                boosters are more effective and safer than using
              </Typography>

              <Typography sx={{ color: "#b7b6b9", fontWeight: 400 }}>
                toxic chemicals in your office
              </Typography>

              <PeopleIcon
                fontSize="large"
                sx={{ color: "#55b284", fontWeight: 600, marginTop: "15px" }}
              />

              <Typography
                marginTop={2}
                sx={{ color: "#13287d", fontSize: "20px", fontWeight: 600 }}
              >
                Recycle? Always.
              </Typography>
              <Typography
                marginTop={2}
                sx={{ color: "#b7b6b9", fontWeight: 400 }}
              >
                Our philosophy rests on the idea that natural
              </Typography>

              <Typography sx={{ color: "#b7b6b9", fontWeight: 400 }}>
                boosters are more effective and safer than using
              </Typography>

              <Typography sx={{ color: "#b7b6b9", fontWeight: 400 }}>
                toxic chemicals in your office
              </Typography>

              <EventNoteIcon
                fontSize="large"
                sx={{ color: "#55b284", fontWeight: 600, marginTop: "15px" }}
              />
              <Typography
                marginTop={2}
                sx={{ color: "#13287d", fontSize: "20px", fontWeight: 600 }}
              >
                Cross-Contamination
              </Typography>
              <Typography
                marginTop={2}
                sx={{ color: "#b7b6b9", fontWeight: 400 }}
              >
                Our philosophy rests on the idea that natural
              </Typography>

              <Typography sx={{ color: "#b7b6b9", fontWeight: 400 }}>
                boosters are more effective and safer than using
              </Typography>

              <Typography sx={{ color: "#b7b6b9", fontWeight: 400 }}>
                toxic chemicals in your office
              </Typography>
            </Box>
          </div>

          <Box
            display={"flex"}
            flexDirection={"column"}
            className="text-center mt-5"
          >
            <Typography
              marginTop={5}
              sx={{ fontSize: "50px", color: "#13287d", fontWeight: 600 }}
            >
              We Will Make Absolutely Any Place
            </Typography>

            <Typography
              sx={{ fontSize: "50px", color: "#13287d", fontWeight: 600 }}
            >
              Clean, Neat & Tidy
            </Typography>

            <Typography marginTop={2} marginBottom={3}
              sx={{ fontSize: "18px", color: "#55b284", fontWeight: 600 }}
            >
              Recent News
            </Typography>
          </Box>



{/* Cards */}
{/* Card1 */}
<Card sx={{ maxWidth: 420 }}>
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
<Card sx={{ maxWidth: 420 }}>
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
<Card sx={{ maxWidth: 420 }}>
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

        </div>
      </Box>
    </div>
  );
}

export default HomePage;

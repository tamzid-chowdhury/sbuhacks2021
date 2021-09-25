import React from 'react'
import { Box } from "@chakra-ui/react"

import moon from '../images/moon.jpg'
import uranus from '../images/uranus.jpg'

import "../styles/postpage.css";
class Postpage extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { pulledData: false };
        //this.handleClick = this.handleClick.bind(this);
      }

      componentDidUpdate(pulledData) {
        // Typical usage (don't forget to compare props):
        if (!pulledData) {
            fetch('/api/quizs')
              .then((res) => res.json())
              .then((data) => console.log(data));
            pulledData = true;
          }
      }

    render() {
        if(this.state.pulledData===false){ //Waits indefinitely for the data
            var max = 5
            var randInt = Math.floor(Math.random() * max);
            if(randInt==0){
                return(
                    <Box>
                        <h1 className="title">"Not Actually Loading...Get PRANKED!!!"</h1>
                        <Box className="quizIconCentered" w="50%" h="50%">
                                    <img alt="Uranus" src={uranus} />
                        </Box>
                        <h1 className="center">"Here's Uranus, where the alien race Uranium is from! Except I'm lying"</h1>
                        <Box h="20px"></Box>
                    </Box>);
                    //Displays a loading screen while it waits
            }
            else if(randInt!=0){
                return(
                    <Box>
                        <h1 className="title">"Loading..."</h1>
                        <Box className="quizIconCentered" w="50%" h="50%">
                                    <img alt="Moon" src={moon} />
                        </Box>
                        <h1 className="center">"Here's a picuture of the moon while you wait!"</h1>
                        <Box h="20px"></Box>
                    </Box>);
                    //Displays a loading screen while it waits

            }
            
        }


        else{
            return(
                <Box>
                    <div id="app"></div>
                    <Box className="containerAcross">  
                        <Box className="quizIcon" w="15%" h="10%">
                                <img alt="Moon" src={moon} />
                        </Box>
                        <Box>
                            <h1 className="title">Nintendo Music Page</h1>
                        </Box>
                    </Box>
                    
    
                    <Box className="containerAcross">
                        <Box w="75%">  {/* for horizontal line*/}
                            <br></br>
                            <hr />
                        </Box>
                    </Box>
    
    
                    <Box className="containerDown">
                        <Box h="10px"></Box> {/* Can move everything down a little*/}
                        <Box className="containerAcross">
                            <Box mr ="20px" w="20px" >  {/* added space on the left side*/}
                            </Box>
    
                            <Box mt="50px" w="500px" h="350px" bg='gray'>  {/* Gradebox */}
                                <h2></h2>
                            </Box>
                            <Box  mt="50px" w="400px" h="350px" bg='#A9A9A9'>  {/* for horizontal line*/}
                            </Box>
    
    
                            <Box className="containerDown">{/* Statbox */}
                                <Box  ml="50px" w="400px" h="50px" bg='Black'>  {/* leaderboards*/}
                                </Box>
                                <Box  ml="50px" w="400px" h="450px" bg='#A9A9A9'>  {/* leaderboards*/}
                                </Box>
                            </Box>
                        </Box>
                        <Box h="60px"></Box>
    
                        <Box className="containerAcross">
                            <Box  ml="250px" w="200px" h="40px" bg='gray'></Box>  {/* for horizontal line*/}
                            <Box  ml="5px" w="200px" h="40px" bg='#A9A9A9'></Box>  {/* for horizontal line*/}
                        </Box>
                        
                        <Box h="60px"></Box>
                    </Box>
                    
                    
                </Box>
            );
        }
        
    }
  }
  
  export default Postpage;
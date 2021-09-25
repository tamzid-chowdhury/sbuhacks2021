import React from 'react'
import { Box } from "@chakra-ui/react"

import moon from '../images/moon.jpg'

import "../styles/postpage.css";
//className="quizIcon"
class Postpage extends React.Component {
    render() {
        return(
            <Box>
                <Box className="container">
                    <Box className="quizIcon" w="15%" h="10%">
                            <img alt="Moon" src={moon} />
                    </Box>
                    <Box>
                        <h1>Nintendo Music Page</h1>
                    </Box>
                </Box>
                

                <Box className="container">
                    <Box w="75%">  {/* for horizontal line*/}
                        <br></br>
                        <hr />
                    </Box>
                </Box>


                <Box className="containerDown">
                    <Box className="container">
                        <Box w="85%">  {/* for horizontal line*/}
                        </Box>

                    </Box>


                    <Box h="10px"></Box> {/* Can move everything down a little*/}
                    <Box className="container">
                        <Box mr ="20px" w="20px" >  {/* added space*/}
                                    
                        </Box>

                        <Box className="containerDown"> {/* Gradebox*/}
                            <Box  h="50px" >  
                            </Box>
                            <Box  w="500px" h="350px" bg='gray'>  
                            </Box>

                        </Box>
                        

                        <Box className="containerDown">{/* Statbox */}
                            <Box  h="50px" >  
                            </Box>
                            <Box  w="400px" h="350px" bg='#A9A9A9'>  {/* for horizontal line*/}
                            </Box>

                        </Box>
                        
                        <Box className="containerDown">{/* Statbox */}
                        <Box  w="50px" >  {/* now for the right section*/}
                        </Box>
                        </Box>

                        <Box className="containerDown">{/* Statbox */}
                        <Box  w="400px" h="50px" bg='Black'>  {/* leaderboards*/}
                        </Box>
                        <Box  w="400px" h="450px" bg='#A9A9A9'>  {/* leaderboards*/}
                        </Box>
                        </Box>
                    </Box>
                    <Box h="60px"></Box>

                    <Box className="container">
                        <Box w="250px"></Box>
                        <Box  w="200px" h="40px" bg='gray'></Box>  {/* for horizontal line*/}
                        <Box w="5px"></Box>
                        <Box  w="200px" h="40px" bg='#A9A9A9'></Box>  {/* for horizontal line*/}
                    </Box>
                    
                    <Box h="60px"></Box>
                </Box>
                
                
            </Box>
        );
    }
  }
  
  export default Postpage;
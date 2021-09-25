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
                    <Box h="10px"></Box> {/* Can move everything down a little*/}
                    <Box className="container">
                        <Box mr ="20px" w="20px" >  {/* added space on the left side*/}
                        </Box>

                        <Box mt="50px" w="500px" h="350px" bg='gray'>  {/* Gradebox */}
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

                    <Box className="container">
                        <Box  ml="250px" w="200px" h="40px" bg='gray'></Box>  {/* for horizontal line*/}
                        <Box  ml="5px" w="200px" h="40px" bg='#A9A9A9'></Box>  {/* for horizontal line*/}
                    </Box>
                    
                    <Box h="60px"></Box>
                </Box>
                
                
            </Box>
        );
    }
  }
  
  export default Postpage;
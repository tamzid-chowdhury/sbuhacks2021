import React from 'react';
import { Box } from '@chakra-ui/react';

import '../styles/homepage.css';
import bg from '../images/homebg.png';

var pulledData = false;

export default function Homepage() {
  if (!pulledData) {
    fetch('/api/quizs')
      .then((res) => res.json())
      .then((data) => console.log(data[0].name));
    pulledData = true;
  }
  return (
    <Box className='container' w='1800px' h='900px' backgroundImage={bg}>
      <Box className='navbar' w='100%' h='25px'>
        <p> username </p>
        <p> 0 </p>
      </Box>
    </Box>
  );
}

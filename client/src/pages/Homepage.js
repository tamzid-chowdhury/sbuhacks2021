import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import QuizCard from '../pages/QuizCard';
import QuizTakingPage from './QuizTakingPage';
import { quizData } from '../quizData';

import '../styles/homepage.css';

import bg from '../images/homebg.png';
import quiz1image from '../images/planets.jpeg';
import quiz2image from '../images/spacejam.png';
import quiz3image from '../images/spacetravel.jpeg';
import quiz4image from '../images/spacetrivia.jpeg';
import finalquizimage from '../images/lock.png';

var pulledData = false;

var quiz1title = 'Name that Planet';
var quiz2title = 'Space in Pop Culture';
var quiz3title = 'History of Space Travel';
var quiz4title = 'Space Trivia';

var finalquiztitle = 'Unlock Final Challenge';

export default function Homepage() {
  if (!pulledData) {
    fetch('/api/quizs')
      .then((res) => res.json())
      .then((data) => console.log(data));
    pulledData = true;
    fetch('/api/users/Daniel')
      .then((res) => res.json())
      .then((data) => console.log(data));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Daniel', score: 100 }),
    };
    fetch('/api/users', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <Box className='container' h='900px' backgroundImage={bg}>
      <Box className='navbar' w='100%' h='25px'>
        <p> username </p>
        <p> 0 </p>
      </Box>

      <div className='title' w='300px' h='400px'>
        Space Quizzer
      </div>

      <div className='subtitle1' w='300px' h='400px'>
        Test your knowledge of space with these quizzes...
      </div>

      <div className='quizcards' w='100%' h='250px'>
        <QuizCard title={quiz1title} image={quiz1image}></QuizCard>

        <QuizCard title={quiz2title} image={quiz2image}></QuizCard>

        <QuizCard title={quiz3title} image={quiz3image}></QuizCard>

        <QuizCard title={quiz4title} image={quiz4image}></QuizCard>
        <Link
          to={{
            pathname: '/quiztaking',
            state: {
              numQuestions: quizData.quiz1.numQuestions,
              questions: quizData.quiz1.questions,
              answers: quizData.quiz1.answers,
              correctAnswers: quizData.quiz1.correctAnswers,
            },
          }}
        >
          <QuizCard title={quiz1title} image={quiz1image}></QuizCard>
        </Link>

        <Link
          to={{
            pathname: '/quiztaking',
            state: {
              numQuestions: quizData.quiz2.numQuestions,
              questions: quizData.quiz2.questions,
              answers: quizData.quiz2.answers,
              correctAnswers: quizData.quiz2.correctAnswers,
            },
          }}
        >
          <QuizCard title={quiz2title} image={quiz2image}></QuizCard>
        </Link>

        <Link
          to={{
            pathname: '/quiztaking',
            state: {
              numQuestions: quizData.quiz3.numQuestions,
              questions: quizData.quiz3.questions,
              answers: quizData.quiz3.answers,
              correctAnswers: quizData.quiz3.correctAnswers,
            },
          }}
        >
          <QuizCard title={quiz3title} image={quiz3image}></QuizCard>
        </Link>

        <Link
          to={{
            pathname: '/quiztaking',
            state: {
              numQuestions: quizData.quiz4.numQuestions,
              questions: quizData.quiz4.questions,
              answers: quizData.quiz4.answers,
              correctAnswers: quizData.quiz4.correctAnswers,
            },
          }}
        >
          <QuizCard title={quiz4title} image={quiz4image}></QuizCard>
        </Link>
      </div>

      <div className='subtitle2' w='300px' h='400px'>
        score a total of 1000 to unlock the challenge below!
      </div>

      <div className='finalquizcard' w='100%' h='250px'>
        <QuizCard title={finalquiztitle} image={finalquizimage}></QuizCard>
      </div>
    </Box>
  );
}

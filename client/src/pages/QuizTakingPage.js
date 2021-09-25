import React, { useState } from 'react'
import { Box, Center, Text, Grid, VStack, Button } from "@chakra-ui/react"
import { useLocation } from 'react-router-dom'

export default function QuizTakingPage( {} ) {
    
    const location = useLocation()  // This passes state from a <Link>
    const questions = location.state?.questions
    const answers = location.state?.answers
    const numQuestions = location.state?.numQuestions
    const correctAnswers = location.state?.correctAnswers
    
    const [questionNum, setQuestionNum] = useState(1);

    const nextQuestion = () => {
        if(questionNum !== numQuestions)
            setQuestionNum(questionNum+1)
    }
   
    return (
        <Box>
            <Center>
                <VStack w="50%">
                    <Box>
                        <Text fontSize="40" fontWeight="bold">
                            {questionNum}. {questions[questionNum-1]}
                        </Text>
                    </Box>

                    <Grid w="100%" templateRows ="1fr 1fr 1fr 1fr" h="300px">
                        <Button bgColor="red.300" onClick={() => nextQuestion()} h="50">{answers[questionNum-1][0]}</Button>
                        <Button bgColor="blue.300" onClick={() => nextQuestion()} h="50">{answers[questionNum-1][1]}</Button>
                        <Button bgColor="green.300" onClick={() => nextQuestion()} h="50">{answers[questionNum-1][2]}</Button>
                        <Button bgColor="yellow.300" onClick={() => nextQuestion()} h="50">{answers[questionNum-1][3]}</Button>
                    </Grid>
                </VStack>
            </Center>
        </Box>
    )
}
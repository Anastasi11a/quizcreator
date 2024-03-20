import React, { useState } from 'react';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import Feedback from './Feedback';

const Quiz = () => {
    const [quizData, setQuizData] = useState(null);
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState([]);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onload = (e) => {
            const content = e.target.result;
            const data = JSON.parse(content);
            setQuizData(data);
            setCurrentQ(0);
            setSelectedAnswer([]);
            setScore(0);
            setShowFeedback(false);
        };
    
        reader.readAsText(file);
    };

    const handleAnswerSelect = (answer) => {
        const newSelectedAnswer = [...selectedAnswer];
        newSelectedAnswer[currentQ] = answer;
        setSelectedAnswer(newSelectedAnswer);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer[currentQ] === quizData[currentQ].correct) {
            setScore(score + 1);
        }
        setCurrentQ(currentQ + 1);
    };

    const reloadQuiz = () => {
        setCurrentQ(0);
        setScore(0);
        setSelectedAnswer([]);
        setShowFeedback(false);
    };

    const handleFeedbackToggle = () => {
        setShowFeedback(!showFeedback);
    };

    const container = 'd-flex justify-content-center align-items-center flex-column';
    const label = 'text-primary fs-3 fw-bold mt-5 mb-3';
    const quizContainer = 'w-100 h-100 p-4 mt-5 mb-4 border rounded';
    const colScore = 'mb-2 fs-6 text-success';
    const colQuestion = 'mt-2 mb-4 fs-5 text-primary';
    const listGroup = 'list-unstyled fs-6';
    const btnSubmit = 'btn-success mt-4 w-100';
    const answersTxt = 'text-success text-center mt-5 mb-4 fs-4';
    const colBtn = 'd-flex justify-content-center gap-4 mt-3 mb-5';

    return (
        <Container id='quiz' className={container}>
            <Form.Group>
                <Form.Label className={label}>Select a JSON file to start the Quiz</Form.Label>
                <Form.Control 
                    type='file' 
                    accept='.json'
                    onChange={handleFileUpload} 
                />
            </Form.Group>

            {quizData && currentQ < quizData.length ? (
                <Container className={quizContainer}>
                    <Row>
                        <Col className={colScore}>
                            Question {currentQ + 1} of {quizData.length}
                        </Col><hr />
                        <Col id='question' className={colQuestion}>
                            {quizData[currentQ].question}
                        </Col>
                    </Row>
                    <ListGroup className={listGroup}>
                        {['a', 'b', 'c', 'd'].map((option) => (
                            <ListGroup.Item key={option} action variant="secondary" >
                                <Form.Check
                                    type='radio'
                                    id={option}
                                    label={quizData[currentQ][option]}
                                    checked={selectedAnswer[currentQ] === option}
                                    onChange={() => handleAnswerSelect(option)}
                                />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Button
                        id='submit'
                        className={btnSubmit}
                        onClick={handleNextQuestion}>
                        Submit
                    </Button>
                </Container>
            ) : quizData && currentQ >= quizData.length ? (
                <Container>
                    <Col className={answersTxt}>
                        You answered correctly at <strong>{score}</strong> out of <strong>{quizData.length}</strong> questions
                    </Col>
                    
                    <Col className={colBtn}>
                        <Button 
                            variant='success'
                            onClick={reloadQuiz}>
                            Reload
                        </Button>
                        <Button 
                            variant='primary'
                            onClick={handleFeedbackToggle}>
                            Feedback
                        </Button>
                    </Col>
                    <Row>
                        {showFeedback && 
                            <Feedback quizData={quizData} selectedAnswer={selectedAnswer} />
                        }
                    </Row>
                </Container>
            ) : null}
        </Container> 
    );
}

export default Quiz;

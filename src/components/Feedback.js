import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const Feedback = ({ quizData, selectedAnswer }) => {
    const title = 'text-primary text-center mt-4 mb-3 fs-4 fw-bold';

    return (
        <Container>
            <Row>
                <Col className={title}>Check your answers</Col>
            </Row>
            <ListGroup>
                {quizData.map((question, index) => {
                    const isCorrect = selectedAnswer[index] === question.correct;
                    const successDanger = isCorrect ? 'text-success' : 'text-danger';
                    const answerStatus = isCorrect ? 'Correct' : 'Incorrect';

                    return (
                        <ListGroup.Item 
                            key={index} 
                            className={successDanger}
                            variant='secondary'>

                            {question.question} - {answerStatus}
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </Container>
    );
};

export default Feedback;
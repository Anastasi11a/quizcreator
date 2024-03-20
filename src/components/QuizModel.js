import React, { useState } from 'react';
import saveJson from './utilites/saveJson';
import { Button, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';

const QuizModel = () => {
    const [questions, setQuestions] = useState([]);
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState({ a: '', b: '', c: '', d: '' });
    const [correctAnswer, setCorrectAnswer] = useState('');

    const handleAddQuestion = () => {
        const newQuestion = {
            question: questionText,
            ...options,
            correct: correctAnswer
        };

        setQuestions([...questions, newQuestion]);
        setQuestionText('');
        setOptions({ a: '', b: '', c: '', d: '' });
        setCorrectAnswer('');
    };

    const handleOptionChange = (key, value) => {
        setOptions({ ...options, [key]: value });
    };

    const handleCorrectAnswerChange = (value) => {
        setCorrectAnswer(value);
    };

    const handleSaveToJson = () => {
        saveJson(questions, 'quiz_questions.json');
    };

    const heading = 'd-flex text-primary justify-content-center';
    const btnAdd = 'btn btn-primary me-2 mt-3';
    const btnSave ='btn btn-success mt-4 mb-4 ps-4 pe-4';

    return (  
        <Container className='mt-5'>
            <h1 className={heading}>Create Quiz Questions</h1>
            <Form className='mb-3'>
                <Form.Group 
                    controlId='questionInput'
                    className='mb-3'>
                    <Form.Label>Question Text:</Form.Label>
                    <Form.Control
                        type='text'
                        value={questionText}
                        onChange={(e) => setQuestionText(e.target.value)}
                    />
                </Form.Group>

                {Object.keys(options).map((key) => (
                    <Form.Group key={key} className='mb-3'>
                        <Row>
                            <Form.Label column sm={1}>{key}</Form.Label>
                            <Col>
                            <Form.Control
                                type='text'
                                value={options[key]}
                                onChange={(e) => handleOptionChange(key, e.target.value)} />
                            </Col>
                        </Row>
                    </Form.Group>
                ))}

                <Form.Group controlId='correctAnswerInput' className='mb-1'>
                    <Form.Label>Correct Answer:</Form.Label>
                    <Form.Select
                        id="correctAnswerInput"
                        value={correctAnswer}
                        onChange={(e) => handleCorrectAnswerChange(e.target.value)}>

                        <option value=''>Select correct answer</option>
                        {Object.keys(options).map((key) => (
                            <option key={key} value={key}>{key}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button 
                    className={btnAdd}
                    onClick={handleAddQuestion}>
                    Add Question
                </Button>
            </Form>
            <hr />
            <h2>Questions:</h2>
            <ListGroup>
                {questions.map((question, index) => (
                    <ListGroup.Item key={index} variant="secondary">
                        <strong>{question.question}</strong>
                        <ListGroup className='mt-2'>
                            {Object.keys(question).filter(key => 
                                key !== 'question' && key !== 'correct').map((key, index) => (
                                <ListGroup.Item key={index}>
                                    {`${key}: ${question[key]}`}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <p><strong>Correct Answer:</strong>{question.correct}</p>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <hr />
            <Button
                className={btnSave} 
                onClick={handleSaveToJson}>
                Save
            </Button>
        </Container>
    );
}
 
export default QuizModel;

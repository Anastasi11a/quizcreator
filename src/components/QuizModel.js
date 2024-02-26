import React, { useState } from 'react';

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
        const json = JSON.stringify(questions, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        a.href = url;
        a.download = 'quiz_questions.json';
        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (  
        <div className="container mt-5">
            <h1 className="d-flex text-primary justify-content-center">Create Quiz Questions</h1>
            <div className="mb-3">
                <label htmlFor="questionInput" className="form-label">Question Text:</label>
                <input
                    type="text"
                    className="form-control"
                    id="questionInput"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                />
            </div>
            <div>
                {Object.keys(options).map((key) => (
                    <div key={key} className="mb-3">
                        <label htmlFor={`optionInput${key}`} className="form-label">{key}:</label>
                        <input
                            type="text"
                            className="form-control"
                            id={`optionInput${key}`}
                            value={options[key]}
                            onChange={(e) => handleOptionChange(key, e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <div className="mb-3">
                <label htmlFor="correctAnswerInput" className="form-label">Correct Answer:</label>
                <select
                    className="form-select"
                    id="correctAnswerInput"
                    value={correctAnswer}
                    onChange={(e) => handleCorrectAnswerChange(e.target.value)}>

                    <option value="">Select correct answer</option>
                    {Object.keys(options).map((key) => (
                        <option key={key} value={key}>{key}</option>
                    ))}
                </select>
            </div>

            <button className="btn btn-primary me-2" onClick={handleAddQuestion}>Add Question</button>
            <hr />
            <h2>Questions:</h2>
            <ul className="list-group">
                {questions.map((question, index) => (
                    <li key={index} className="list-group-item">
                        <strong>{question.question}</strong>
                        <ul className="list-group mt-2">
                            {Object.keys(question).filter(key => 
                                key !== 'question' && key !== 'correct').map((key, index) => (
                                <li key={index} className="list-group-item">{`${key}: ${question[key]}`}</li>
                            ))}
                        </ul>
                        <p><strong>Correct Answer:</strong> {question.correct}</p>
                    </li>
                ))}
            </ul>
            <hr />
            <button className="btn btn-success mb-3" onClick={handleSaveToJson}>Save to JSON</button>
        </div>
    );
}
 
export default QuizModel;

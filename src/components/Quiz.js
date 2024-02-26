import React, { useState } from 'react';
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

    return (
        <div className="quiz-container d-flex justify-content-center align-items-center flex-column" id="quiz">
            <div className="mt-5 mb-3">
                <h2 className="text-primary fs-3">Select a JSON file to start the quiz</h2>
                <input type="file" onChange={handleFileUpload} accept=".json" className="form-control mt-3" />
            </div>

            {quizData && currentQ < quizData.length ? (
                <div className="mw-100 w-75 h-75 p-4 border border-2 rounded">
                   <h3 className="mt-3 mb-3 text-success">
                        Question {currentQ + 1} of {quizData.length}
                    </h3>
                    <hr />
                    <h2 id="question" className="mt-3 mb-3">
                        {quizData[currentQ].question}
                    </h2>
                    <ul className="list-unstyled fs-5">
                        {['a', 'b', 'c', 'd'].map((option) => (
                            <li key={option} className="mb-2">
                                <input
                                    type="radio"
                                    id={option}
                                    name="answer"
                                    style={{ marginRight: "0.5rem" }}
                                    checked={selectedAnswer[currentQ] === option}
                                    onChange={() => handleAnswerSelect(option)}
                                />
                                <label htmlFor={option} className="ml-3">{quizData[currentQ][option]}</label>
                            </li>
                        ))}
                    </ul>
                    <div className="text-center">
                        <button id="submit" onClick={handleNextQuestion} className="btn btn-primary mt-3">Submit</button>
                    </div>
                </div>
            ) : quizData && currentQ >= quizData.length ? (
                <div>
                    <h2 className="text-success mt-5 ms-2 me-2">You answered correctly at {score} out of {quizData.length} questions</h2>
                    <div className="d-flex justify-content-center gap-4 mt-3 mb-5">
                        <button onClick={reloadQuiz} className="btn btn-success mt-4">Reload</button>
                        <button onClick={handleFeedbackToggle} className="btn btn-info mt-4">Feedback</button>
                    </div>
                    {showFeedback && <Feedback quizData={quizData} selectedAnswer={selectedAnswer} />}
                </div>
            ) : null}
        </div> 
    );
}

export default Quiz;

import React from 'react';

const Feedback = ({ quizData, selectedAnswer }) => {
    return (
        <>
            <h3 className="d-flex justify-content-center align-items-center fs-2 text-primary">
                Feedback
            </h3>
            <ul>
                {quizData.map((question, index) => {
                    const isCorrect = selectedAnswer[index] === question.correct;
                    const className = isCorrect ? 'text-success' : 'text-danger';
                    const answerStatus = isCorrect ? 'Correct' : 'Incorrect';

                    return (
                        <li key={index} className={className}>
                            {question.question} - {answerStatus}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Feedback;
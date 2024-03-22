This App creates a React components for creating quizzes. 
Bootstrap is used to style the application interface.

### Home
The Home component serves as an introductory page for the quiz application, outlining the steps involved in creating, taking, and reviewing quiz content.

### QuizModel
The component QuizModel provides functionality for adding questions, managing answer options and correct answers, and saving a list of questions in JSON format. 

The handleAddQuestion function creates a new question object using the current values of questionText, options, and correctAnswer, updates the questions state by adding this new question, and resets the states related to the question input fields to prepare for adding the next question. 
This function is typically called when the user wants to add a new question to the quiz.

The handleOptionChange function dynamically updates answer options in the state of the QuizModel component based on the given key.

The handleCorrectAnswerChange function ensures that the correct answer is dynamically updated in the state of the QuizModel component based on the value provided as an argument.

The handleSaveToJson function converts quiz questions data to JSON, creates a downloadable Blob containing the JSON data, creates a temporary URL for the Blob, initiates a download by simulating a click on a dynamically created anchor element, and then cleans up by removing the anchor element and revoking the temporary URL.

### Quiz
Functions and methods of the Quiz component handle loading data from a file, selecting an answer, moving to the next question, reloading the quiz, and displaying feedback. The component also has conditional statements to display different parts of the interface depending on the current state of the quiz.

The handleAnswerSelect function allows for dynamically updating the selected answer for the current question in the quiz. It ensures immutability by creating a copy of the selectedAnswer array, updating the selected answer in the copied array, and then setting the state variable selectedAnswer with the updated array.

The handleNextQuestion function checks if the selected answer for the current question is correct. If it is, the score is incremented. Regardless of whether the answer is correct or not, the function proceeds to move to the next question in the quiz by incrementing the currentQ state variable.

The reloadQuiz function effectively resets all relevant state variables to their initial values, preparing the quiz for a fresh start. This function is typically called when the user chooses to restart the quiz, allowing them to attempt it again from the beginning.

The handleFeedbackToggle function is responsible for toggling the visibility of feedback in the quiz. It allows users to control whether they want to view feedback or hide it while interacting with the quiz interface.

### Feedback
This Feedback component iterates through each question in the quizData array, compares the user's selected answer with the correct answer, and provides feedback for each question based on whether the answer is correct or incorrect. The feedback is displayed as a list, with each item indicating the question text and whether the answer is correct or incorrect, styled accordingly.
____________________________________________________________________________
Technologies Used:
- React
- React Router
- Bootstrap

Features:
1. Quiz Creation: Users can create quizzes by adding questions, options, and selecting the correct answer.
2. Quiz Taking: Users can take quizzes uploaded in JSON format, selecting answers for each question.
3. Dynamic Feedback: After completing a quiz, users receive feedback on their answers, indicating correctness.
4. File Upload: Quizzes are uploaded via JSON files, providing a standardized format for quiz data.
Responsive Design: The application is designed to work seamlessly across different devices and screen sizes.

Purpose:
To facilitate quiz creation, taking, and feedback provision, enhancing educational activities and knowledge evaluation.

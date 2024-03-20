import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import QuizModel from "./components/QuizModel";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/quizcreator" element={<Home />} />
                <Route path="/quizcreator/quizModel" element={<QuizModel />} />
                <Route path="/quizcreator/quiz" element={<Quiz />} /> 
            </Routes>
        </div>
    );
}

export default App;
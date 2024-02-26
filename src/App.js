import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Quiz from "./components/Quiz";
import QuizModel from "./components/QuizModel";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quizModel" element={<QuizModel />} />
                <Route path="/quiz" element={<Quiz />} /> 
            </Routes>
        </div>
    );
}

export default App;
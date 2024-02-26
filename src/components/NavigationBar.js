import { Nav } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Nav 
            className="justify-content-center bg-dark bg-gradient fs-6" 
            activeKey="/" 
            variant="tabs"
        >
            <Nav.Item>
                <Nav.Link href="/" className="link-primary text-primary fw-bold">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/quizModel" className="text-light">QuizCreator</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/quiz" className="text-light">Quiz</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default NavigationBar;

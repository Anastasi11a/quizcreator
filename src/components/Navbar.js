import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navStyle = "justify-content-center bg-dark bg-gradient fs-4 pt-3";
    const navLinkStyle = "text-info link-success fw-bold";
    const navLinkLightStyle = "text-light link-success fw-bold";

    return (
        <Nav variant="tabs" activeKey="/quizcreator" className={navStyle}>
            <Nav.Item>
                <Nav.Link
                    as={Link}
                    to="/quizcreator" 
                    href="#quizcreator" 
                    className={navLinkStyle}>
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link 
                    as={Link}
                    to="/quizcreator/quizModel"
                    href="#quizcreator/quizModel" 
                    className={navLinkLightStyle}>
                    QuizCreator
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link 
                    as={Link}
                    to="/quizcreator/quiz"
                    href="#/quizcreator/quiz" 
                    className={navLinkLightStyle}>
                    Quiz
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default Navbar;

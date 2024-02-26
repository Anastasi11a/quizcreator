import step1 from '../components/assets/img_q_creator.jpg';
import step2 from '../components/assets/img_q.jpg';
import step3 from '../components/assets/img_feedback.jpg';

const Home = () => {
    return (  
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 ms-2 me-2">
            <div className="col">
                <div className="card bg-dark bg-gradient text-light">
                    <img src={step1} className="card-img-top border border-secondar rounded-bottom" alt="quiz model" />
                    <div className="card-body">
                        <h5 className="card-title text-center text-primary">Enter your content</h5>
                        <p className="card-text">
                            Add your own questions and answers.<br /> Indicate the correct answer.<br /> Save the result.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card bg-dark bg-gradient text-light">
                    <img src={step2} className="card-img-top border border-secondar rounded-bottom" alt="quiz" />
                    <div className="card-body">
                        <h5 className="card-title text-center text-primary">Take the Quiz</h5>
                        <p className="card-text ">
                            Upload the file saved in <b>json</b> format.<br /> Take the quiz.<br /> Submit your answers.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card bg-dark bg-gradient text-light">
                    <img src={step3} className="card-img-top border border-secondar rounded-bottom" alt="feedback" />
                    <div className="card-body">
                        <h5 className="card-title text-center text-primary">Feedback</h5>
                        <p className="card-text">
                            Look at the result.<br /> Restart the test.<br /> Check which questions are answered incorrectly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;
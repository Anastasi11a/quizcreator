import { Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'react-bootstrap';
import { homeList } from './utilites/homeList';

const Home = () => {
    const row = "d-flex flex-wrap g-4 mt-5 mb-5 ms-2 me-2";
    const cardStyle = "h-100 card bg-dark bg-gradient text-light";
    const title = "text-center text-info p-2 fs-4";
    const img = "border border-secondar rounded";
    const text ="text-start text-light mb-2 mt-3 p-2 fs-6";

    return (
        <Row xs={1} md={2} lg={3} className={row}>
            {homeList.map((card, i) => (
                <Col key={i}>
                    <Card className={cardStyle}>
                        <CardBody>
                            <CardTitle className={title}>{card.title}</CardTitle>
                            <CardImg 
                                src={card.img}
                                alt={card.title} 
                                className={img}
                            />
                            <CardText className={text}>{card.description}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}
 
export default Home;
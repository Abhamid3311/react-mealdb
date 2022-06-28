import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
const meal = ({ meal }) => {
    const { strMeal, strMealThumb, strInstructions } = meal;
    return (
        <Col lg={4} className='g-4'>
            <Card >
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 200)}
                    </Card.Text>
                    <Button variant="success">Order now</Button>
                </Card.Body>
            </Card>

        </Col>
    );
};

export default meal;
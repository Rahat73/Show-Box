import React from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {

    return (
        <Col className='columns'>
            <Card>
                <Card.Img variant="top" src={show.image.medium} />
                <Card.Body>
                    <Card.Title>{show.name}</Card.Title>
                    <Card.Text>
                        <ul className='text-start'>
                            <li>Language: {show.language}</li>
                            <li>rating: {show.rating.average}</li>
                            <li>Run Time: {show.runtime}</li>
                            <li>Network: {show.network?.name}</li>
                        </ul>
                    </Card.Text>
                    <Link to={`/showDetails/${show.id}`}><button type="button" className="btn btn-primary">View details</button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ShowCard;
import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ShowDetails = () => {
    const showDetails = useLoaderData();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let bookingInfo;
    const handleBook = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;

        bookingInfo = {
            name: name,
            email: email,
            ShowName: showDetails.name
        }
        console.log(bookingInfo);
        localStorage.setItem('BookingInfo', JSON.stringify(bookingInfo));
        setShow(false)
    }

    return (
        <Container className='fluid my-5'>
            <Row className='flex align-items-center'>
                <Col>
                    <img src={showDetails.image.original} alt="" className='card-img-show' />
                </Col>
                <Col>
                    <p>{showDetails.summary}</p>
                    <Button variant="primary" onClick={handleShow} >Book now</Button>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{showDetails.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Rating: {showDetails.rating.average}</h5>
                    <h5>Language: {showDetails.language}</h5>
                    <h5>Runtime: {showDetails.runtime} mins</h5>
                    <form onSubmit={handleBook}>
                        <input type="text" name='name' placeholder='Enter your name' className='d-block my-1' />
                        <input type="email" name='email' placeholder='Enter your email' className='d-bock my-1' />
                        <div>
                            <Button variant="secondary" onClick={handleClose} className='mx-3'>
                                Close
                            </Button>
                            <Button variant="primary" type='submit'>
                                Book
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default ShowDetails;
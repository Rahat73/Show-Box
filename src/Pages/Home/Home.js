import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowCard from '../../Components/ShowCard';
import Row from 'react-bootstrap/Row';

const Home = () => {
    const shows = useLoaderData();

    return (
        <div className='container my-5'>
            <h1 className='text-decoration-underline my-5'>Availble Shows</h1>
            <Row xs={1} md={3} lg={4} className="rows g-4">
                {
                    shows.map(show => <ShowCard
                        key={show.show.id}
                        show={show.show}
                    >
                    </ShowCard>)
                }
            </Row>
        </div>
    );
};

export default Home;
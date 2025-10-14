import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import Signup from './Signup';

export default function Hero() {

    return (
        <Container className="vh-100 hero d-flex flex-column justify-content-center">
            <Container className="col-lg-6 mx-auto text-center text-white">
                <h1 className="display-1">An awesome app</h1>
                <p className="fs-2 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla amet commodi officia nobis incidunt quia, deleniti impedit non nisi?</p>
                <Stack direction="horizontal" className="justify-content-around mt-4">
                    <Button variant="success" size="lg">Getting started</Button>
                    {/* <Button variant="info" size="lg">Sign up</Button> */}
                    <Signup />
                </Stack>
            </Container>
        </Container>
    );
}
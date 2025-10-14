import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';


import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';

export default function Features() {
    return (
        <Stack direction="horizontal" className="p-5 justify-content-around">
            {[feature1, feature2, feature3].map(createFeature)}
        </Stack>
    );
}

function createFeature(feature, index) {
    return (
        <Card key={index} style={{ width: '20rem' }}>
            <Card.Img src={feature} variant="top" />
            <Card.Body>
                <Card.Title className="text-center">Feature {++index}</Card.Title>
                <Card.Text>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tempore aut et saepe hic facilis facere nisi nesciunt perferendis reiciendis.</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
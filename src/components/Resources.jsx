import styled from 'styled-components';

import { Button } from './Button';

export default function Resources() {
    return (
        <Container>
            {[1, 2, 3].map(createResource)}
        </Container>
    );
}

function createResource(_, index) {
    return (
        <div key={index}>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dolores inventore dolor consequatur error et. Voluptatum reprehenderit fuga tempore earum.</p>
            <Button outline>Learn more</Button>
        </div>
    );
}

const Container = styled.div`
    display: flex;
    gap: 1em;
    justify-content: space-around;

    padding: 2em 0;

    div {
        max-width: 20rem;
        border: 1px solid rgb(255, 255, 255, 0.2);
        padding: 1rem;
        border-radius: 5px;
    }
`;
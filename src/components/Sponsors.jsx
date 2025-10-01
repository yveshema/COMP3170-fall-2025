import styled from 'styled-components';

import { Button } from './Button';

const sponsors = [
    "github",
    "vercel",
    "bcit", 
    "acme",
    "amazon",
    "github",
    "vercel",
    "bcit", 
    "acme",
    "amazon"
];

export default function Sponsors() {
    return (
        <div>
            <Container>
                {sponsors.map((sponsor, index) => (
                    <div key={index}>
                        <h3>{sponsor.toUpperCase()}</h3>
                    </div>
                ))}
            </Container>

            <Button large>Become a sponsor</Button>
        </div>
        
    );
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    margin: 2em;

    div {
        width: 12rem;
        height: 7.5rem;
        vertical-align: center;
        align-content: center;

        background: rgb(0, 0, 0, 0.3);
        border: 1px solid rgb(200, 200, 200, 0.2);
        border-radius: 5px;
    }

    h3 {
        font-weight: bold;
    }
`;
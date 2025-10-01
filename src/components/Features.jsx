import styled from 'styled-components';

import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';

export default function Features() {
    return (
        <Wrapper>
            {[feature1, feature2, feature3].map(createFeature)}
        </Wrapper>
    );
}

function createFeature(feature, index) {
    return (
        <div key={index}>
            <img src={feature} alt="" />
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, autem. Eius, obcaecati id provident odio suscipit deleniti vel minima doloribus.</p>
        </div>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: space-around;
    padding: 2em 0;

    div {
        max-width: 20rem;
    }

    img {
        width: 100%;
    }
`;
import { Button } from './Button';

import { hero } from './Hero.module.css';

export default function Hero() {
    return (
        <div className={hero}>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium a eius molestias dignissimos minus tenetur, perspiciatis repellendus reprehenderit non repellat, exercitationem aliquam consectetur similique doloribus? Sapiente et ullam voluptas error?</p>
            <Button primary large>Get started</Button>
        </div>
    );
}
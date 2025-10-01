import { header } from './Header.module.css';

export default function Header() {
    return (
        <div className={header}>
            <div>
                <img src="/logoipsum.svg" alt="logo" />
                <form>
                    <input type="search" placeholder="search..." />
                </form>
            </div>

            <div>
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#resources">Resources</a>
                <a href="#sponsors">Sponsors</a>
                <a href="#">Guide</a>
            </div>
        </div>
    );
}
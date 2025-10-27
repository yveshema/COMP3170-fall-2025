import '../styles/menubar.css';

export default function Menubar({ children }) {
    return (
        <div className="menubar">
            {children}
        </div>
    );
}
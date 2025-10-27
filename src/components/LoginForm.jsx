import '../styles/forms.css';

function LoginForm() {
    return (
        <div className="form-container">
            <h2>Login</h2>
            <form>
                <div className="form-control">
                    <label>Username:</label>
                    <input name="username" type="text" />
                </div>
                <div className="form-control">
                    <label>Password:</label>
                    <input name="password" type="password" />
                </div>
                <button className="btn primary">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;
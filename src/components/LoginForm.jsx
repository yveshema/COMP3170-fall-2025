function LoginForm() {
 
    return (
        <div className="form-container">
            <h2>Login</h2>
            <form>
                <div className="form-control">
                    <label>Username:</label>
                    <input type="text" />
                </div>
                <div className="form-control">
                    <label>Password:</label>
                    <input type="password" />
                </div>
                
                <button className="btn primary">Save</button>
            </form>
        </div>
    );

}

export default LoginForm;
function Login() {
    return(
        <div>
            <fieldset>
                <form>
                    <h1>Login Form</h1>
                    <label htmlFor="name"><h3 >Username:</h3></label>
                    <input type="text" value="Enter your name"/><br/>
                    <label htmlFor="password">
                        <h3>Password:</h3>
                    </label>
                    <input type="text" value="Enter your password"/><br/><br/>
                    <button type="submit">Login</button>
                    <h3>Do you have an account <a href="form.html">Register</a></h3>
                </form>
            </fieldset>
        </div>
    )

}
export default Login;
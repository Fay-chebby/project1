function Form() {
    return(
        <div>
            <fieldset>
                <form>
                    <h2> Laundry Registration Form</h2>
                    <label htmlFor="name"><h3 >Name:</h3></label>
                    <input type="text" value="Enter your name"/><br/><br/>
                    <label htmlFor="email"><h3>Email:</h3></label>
                    <input type="text" value="Enter your Email"/><br/><br/>
                    <label htmlFor="phone"><h3 >Phone:</h3></label>
                    <input type="text" value="Enter phone number"/><br/><br/>
                    <label htmlFor="Address">
                        <h3 >Address:</h3></label
                    >
                    <input type="text" value="Enter your Address"/><br/><br/>
                    <label htmlFor="password"
                    ><h3>Input your password:</h3></label
                    >
                    <input type="text" value="Enter your password"/><br/><br/>
                    <label htmlFor="password">
                        <h3>Confirm password:</h3></label
                    >
                    <input type="text" value="Confirm password"/><br/><br/>

                    <label htmlFor="name">Choose your role </label><br/>
                    <input
                        type="radio"
                        id=""
                        name=""
                    />
                    <label htmlFor="male">Customer</label>
                    <input
                        type="radio"
                        id=""
                        name=""
                    />
                    <label htmlFor="Retailer">Retailer</label><br/>
                    <button type="submit">Register</button>
                    <h3>Already have an account <a href="login.html">LOG IN</a></h3>
                </form>
            </fieldset>
        </div>
    );
}

export default Form;
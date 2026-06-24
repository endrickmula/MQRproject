import "bootstrap/dist/css/bootstrap.min.css"; //for styling the UI
import {Link, useNavigate} from "react-router-dom"; //used for routing / navigation
import axios from "axios"; // used for API access
import { useState } from "react"; //used to manage state


const Signin = () => { 
    //define the hooks
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // hooks used to help indicate state of our sign up process
    const [loading, setLoading] = useState(""); 
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    //hook for navigation
    const navigate = useNavigate()

    //function to help submit the data
    const submit = async (e) => {
        e.preventDefault() //prevents default form submission

        setLoading("Please wait as we log you in...");

        try {
            // add the data in the hooks in variable
            const data = new FormData();
            data.append("email", email);
            data.append("password", password);

            //post the data to the API
            const response = await axios.post("https://endrick.alwaysdata.net/api/signin", data)

            //update the state to be loading
            setLoading("");

            // check if the response has the user
            if(response.data.user) {
                // take to the home page
                setSuccess("Login successful");
                setSuccess(data.user);
                navigate("/")
            } else {
                //user not found
                setError("Login Failed")
            }
        
        } catch (error) {
            setLoading("");
            setError("There was a server error");
        }
    };



    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4 bg-secondary">

                <h2 className="text-primary">Sign In</h2>

                {/* form  */}
                <form onSubmit={submit}>
                    {/* bind */}
                    <h4 className="text-success">{loading}</h4>
                    <h3 className="text-danger">{error}</h3>
                    <h4 className="text-light  btn-outline-warning">{success}</h4>


                    <input 
                    type="email"
                    placeholder="Enter  email..."
                    className="form-control"   
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}             
                    required />

                    <br />

                    <input
                    type="password"
                    placeholder="Enter password..."
                    className="form-control"    
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}               
                    required />

                    <br />
                    
                    <button type="submit" className="btn btn-outline-primary w-100">
                        Log In
                    </button>
                </form>
                <br />
                    Don't have an account<Link to="/signup">Sign up</Link>

            </div>

        </div>
    );
};

export default Signin;
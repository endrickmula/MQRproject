import "bootstrap/dist/css/bootstrap.min.css"; //used for styling the UI
import { useState} from "react"; // for state management
import { useLocation } from "react-router-dom"; // 
import axios from "axios"; //used for API access


const Makepayment = () => {
    // extract the data received from the products using useLocation
    const {product} = useLocation().state || {};

    // hooks to hold phone Number
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("");


    // function to help submit the transaction details 
    const submit = async (e) => {
        e.preventDefault();

        // update the message for loading... 
        setMessage("Please wait as we process!");

        // store the updated hooks in a variable 
        const data = new FormData (); 
        data.append("phone", phone);
        data.append("amount", product.product_cost);

        // post the data to the API for th transaction to occur
        const response = await axios.post("https://endrick.alwaysdata.net/api/mpesa_payment", data);

        // setmessage to show the transaction status    
        setMessage("Please complete payment on your phone");

    }


    return  (
       <div className="container bg-secondary bg">
            <h1 className="bg-">LIPA NA MPESA</h1>
            <p>Product Name: {product.product_name}</p>
            <p>Product Cost: {product.product_cost}</p>


            {/* form */}
            <form onSubmit={submit}>
                {message}  <br />

                {/* input fields  */}
                <input
                    type="text"
                    placeholder="Enter the phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <br /> <br />

                {/* button  */}
                <button
                    className="btn btn-dark"
                >Make Payment</button>
            </form>
            <br></br>
            <br></br>

            {/* section 7n starts here  */}
          {/* roe for the section starts here   */}
         <section >

         </section>
       
       <footer class="bg-dark text-white text-center p-3">
          <br></br>

            <h5>Developed by endrick mula &copy;2026. All rights reserved</h5>
        </footer>
        {/* row for the section ends here  */}
        {/* section 7 ends here  */}
                    

       </div>
    );
};

export default Makepayment;
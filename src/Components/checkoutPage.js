import React, { useState } from "react";
import "../Style/checkoutPage_CSS.css";

function CheckoutPage(){
    const [name,setName]=useState('')
	const [email,setEmail]=useState('')
	const [address,setAddress]=useState('')
    return(
        <div className="register-body">
		<div className="form signup">
			<div className="card">
            <h2>CHECKOUT</h2>
			<div class="inputBox">
                <label className="label">Name</label>
				<input type="text" className="inputField" value={name} onInput={(event=>setName(event.target.value))} placeholder="Name" required="required"/>
			</div>
			<div class="inputBox">
                <label className="label">Email</label>
				<input type="text" className="inputField" value={email} onInput={(event=>setEmail(event.target.value))} placeholder="Email" required="required"/>
			</div>
			<div class="inputBox">
                <label className="label">Address</label>
				<textarea className="inputField" value={address} onInput={(event=>setAddress(event.target.value))} placeholder="Address" required/>
			</div>
			<div class="inputBox">
                <button className="btn btn-primary">Submit</button>
			</div>
            </div>
		</div>
    </div>
    );
}

export default CheckoutPage;
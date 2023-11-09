import React from "react";
import"../styles/register.css"
const Register=()=>
{
    return(
    <div className='registerContainer'>
        <h3>Register</h3>
<div>
    <input type='email' name="email" placeholder="Enter email"></input>
</div>
<div>
    <input type="password" name='password' placeholder="Enter Password"/>
</div>
<button>Registration</button>
<button className='link'> Want to Register?</button>
    </div>        
    )
}
export default Register
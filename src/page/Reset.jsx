import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { sendPasswordReset } from "../firebase";

const Reset = () => {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Reset Your Password</h1>
      <div className="flex flex-col">
        <div className="my-1">
            <label htmlFor="email">Enter Your Email</label>
            <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            required
            placeholder="Your Email"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
            />
        </div>
        <button
            type="submit"
            onClick={()=>{
                sendPasswordReset(email);
                navigate('/login')
            }}
            className="bg-black text-white p-1 rounded-md m-auto"
        >
            Send Password Reset Email
        </button>
      </div>
      <p className="my-2">
        Don&apos;t you have an account ? {' '}
        <NavLink to="/register" className='underline'>Register</NavLink>
      </p>
    </div>
  )
}

export default Reset
import { useState } from "react"
import { loginWithEmailAndPassword } from "../firebase"
import { NavLink, Navigate,useNavigate } from "react-router-dom"
const Login = () => {
    
  const navigate = useNavigate(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin =async(e)=>{
    e.preventDefault();
    try {
        const response = await loginWithEmailAndPassword(email,password);
        navigate("/home");
    } catch (error) {
        console.error(error)
    }

  }
  return(
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Login</h1>
      <div className="flex flex-col">
        <div className="my-1">
            <label htmlFor="email">Email address</label>
            <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            required
            placeholder="Email Address"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
            />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            name="password" 
            id="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            required
            placeholder="Password"
            className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
            />
        </div>
        <button
            type="submit"
            onClick={handleLogin}
            className="bg-black text-white p-1 rounded-md m-auto"
        >
            Login
        </button>
      </div>
      <p className="my-2">
        No account ! Create an account? {' '}
        <NavLink to="/register" className='underline'>Register</NavLink>
      </p>
    </div>
  )
}

export default Login
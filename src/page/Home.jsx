import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const handleLogout =()=>{
    signOut(auth).then(()=>{
        navigate("/login");
        console.log("Signed Out ...");
    }).catch((error)=>{
        console.log(error)
    })
  }
  if (loading) return <p>User info Loading</p>;
  return (
    <>
      <div>Welcome , {user.email}</div>
      <button 
      className="bg-black text-white tounded p-1"
      onClick={handleLogout}
      >
        Logout
    </button>
    </>
  );
};

export default Home;

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { Outlet,Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    const [user,loading ] = useAuthState(auth);
    if (loading) return <p>User data Loading</p>;

  return (
    <>
        {user? <Outlet/>: <Navigate to="/login"/>}
    </>
  )
}

export default PrivateRoutes
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // const navigate = useNavigate()

    if(loading){
        return <div className='text-center m-5'>
            <progress className="progress w-56"></progress>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    // return navigate('/login')

};

export default PrivateRoute;
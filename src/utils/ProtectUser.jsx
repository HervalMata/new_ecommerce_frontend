import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

const ProtectUser = () => {
    const {userInfo} = useSelector(state => state.auth || [])
    if (userInfo) {
        return <Navigate to='/login' replace={true} />
    } else {
        return <Outlet /> //invert after tests
    }
}

export default ProtectUser;

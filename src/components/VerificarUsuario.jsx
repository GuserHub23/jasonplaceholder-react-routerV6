import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { Navigate, useLocation } from "react-router-dom"

const VerificarUsuario = ({children}) => {

    const {user} = useContext(UserContext)

    if (!user) {
        return <Navigate to="/"/>
    }

    return children

}

export default VerificarUsuario;

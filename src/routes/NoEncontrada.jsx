import { Link } from "react-router-dom"

const NoEncontrada = () => {
    return (
        <div className="container text-center mt-5">
            <h1>Error: 404</h1>
            <h2>Pagina no encontrada</h2>
            <Link to="/" className="btn btn-outline-primary" >Inicio</Link>
        </div>
    )
}

export default NoEncontrada

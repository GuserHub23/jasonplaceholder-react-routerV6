import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import NoEncontrada from "./NoEncontrada";

const Post = () => {

    const params = useParams()
    const { data, error, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const { id, title, body } = data;

    if (loading) {
        return <h2>Loading...</h2>
    }

    if(!id) {
        return error || <NoEncontrada />
    }

    return (
        <div className="card d-flex w-50 mt-3 m-auto justify-content-between">
            <div className="container card-img-top bg-dark">
                <h1 className="card-title text-warning p-4">{id} - {title}</h1>
            </div>
            <div className="card-body">
                <h5 className="card-text">{body}</h5>
            </div>
        </div>
    )
}

export default Post

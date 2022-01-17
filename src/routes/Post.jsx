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
            <div className="card-body">
                <h1 className="card-title">{id} - {title}</h1>
                <h5 className="card-text">{body}</h5>
            </div>
        </div>
    )
}

export default Post

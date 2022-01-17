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
        <div>
            <h1>{id} - {title}</h1>
            <h2>{body}</h2>
        </div>
    )
}

export default Post

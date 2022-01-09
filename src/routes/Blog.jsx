import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Blog = () => {

    const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')

    let [searchParams, setSearchParams] = useSearchParams()

    const handleChange = e => {
        let filter = e.target.value;

        if(filter) {
            setSearchParams({ filter })
        } else {
            setSearchParams({})
        }
    };

    if (loading) {
        return <h2>Loading...</h2>
    }

    if(error !== '') {
        return <h2>Error</h2>
    }

    return (
        <div className="container">
            <h1>Blog</h1>

            <input 
                className="form-control mb-2"
                type="text"
                value={searchParams.get('filter') || ''}
                onChange={handleChange}
            />
            {
                data.filter(item => {
                    let filter = searchParams.get('filter')
                    if (!filter) return true;

                    let title = item.title.toLowerCase()
                    return title.startsWith(filter.toLowerCase())
                    
                }).map(item => (
                    <h4 key={item.id}>
                        <Link to={`/blog/${item.id}`}>{item.id} - {item.title}</Link>
                    </h4>
                ))
            }
        </div>
    );
}

export default Blog

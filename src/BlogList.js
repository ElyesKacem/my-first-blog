const BlogList = (props) => {
    const data = props.blogs;
    return (<div className="blog-list">
        <h1> {props.title} </h1>
        {data.map((blog) => (

            <div className="blog-preview" key={blog.id} >
                <h2> {blog.title} </h2>
                <p> {blog.body} </p>
                <h3> {blog.author} </h3>
                <button onClick={() => props.choice(blog.id)}>Delete</button>
            </div>

        ))}
    </div>);
}

export default BlogList;
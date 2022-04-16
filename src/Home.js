import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const choice = (id) => {
        const newBlog = data.filter(blog => blog.id !== id);
        setData(newBlog);
    }

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8080/blogs")
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                console.log("done");
                setData(data);
            })
    }, [])

    return (<div className="home">

        {data && <BlogList blogs={data} choice={choice} title="All blogs" />}
        {/* <BlogList blogs={data.filter(blog => (blog.author === "mario"))} title="Mario's blogs" choice={choice} /> */}

    </div>);
}

export default Home;
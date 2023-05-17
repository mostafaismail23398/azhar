import React from "react";
import axios from "axios";
import './posts.css';


class Posts extends React.Component{
    state={
        posts: [ ]
    }
    constructor(){
        super();
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            this.setState({
                posts:response.data
            })
        })

    }
    render(){
        const posts = this.state.posts
        const postslist = posts.map((post)=>{
            return(
                <div>
                    <div className="cardd">
                        <p>{post.id}</p>
                        <p>{post.title}</p>
                        <p>{post.body}</p>

                    </div>
                </div>
            )
        })
        return(postslist)

    }
    
}
 export default Posts


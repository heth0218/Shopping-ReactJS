import React, { Component } from 'react';
import axios from 'axios'

class PostList extends Component {
constructor(){
    super()
    this.state={
        post:[]
    }
}

componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
        console.log(response)
        this.setState({post:response.data})
    })
}
    render() {
        return (
            <div>
                {this.state.post.map(post=>{return(<div key={post.id}>{post.title}</div>)})}
            
            </div>
        );
    }
}

export default PostList;
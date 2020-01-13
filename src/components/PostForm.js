import React, { Component } from 'react';
import axios from 'axios'

class PostForm extends Component {
constructor(){
    super()
    this.state={
        userid:" ",
        title:" ",
        body:" "
    }
}
changeHandler=(e)=>{
this.setState({
    [e.target.name]:e.target.value
})
}
subHandler=e=>{
e.preventDefault()
console.log(this.state)
axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then(res=>{
    console.log(res)
}).catch(
    err=>{
        console.log(err);
    }
)
}
    render() {
        return (
            <div>
                <form onSubmit={this.subHandler}>
                    <div>
                        Userid:
                        <input type="text" name="userid" value={this.state.userid} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        Title:
                        <input type="text" name="title" value={this.state.title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        Body:
                        <input type="text" name="body" value={this.state.body} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">
                    Submit
                </button>
                </form>
                
                
            </div>
        );
    }
}

export default PostForm;
import React, { Component } from 'react';

class Shopping extends Component {
    constructor(){
        super()
        this.state={
            incr:0,
            cost:0,
            list:[]
        }
    }
    increment=()=>{
        this.setState(prevState=>{
            return{incr:prevState.incr+1,
            cost:prevState.cost+20}
        })
    }
    decrement=()=>{
        if(this.state.incr){
        this.setState(prevState=>{
            return{
                incr:prevState.incr-1,
            cost:prevState.cost-20}
        })}
    }
    show=()=>{
        const updatedlist=[...this.state.list,{cost:this.state.cost}]
        this.setState({
            list:updatedlist
        })
    }
    render() {
        console.log(this.state.list)
        return (
            <div>
                <img src="https://images.all-free-download.com/images/graphiclarge/pour_the_milk_picture_167091.jpg" width="200px"  />
                <h2>20$</h2>
                {this.state.incr}
                <button onClick={this.increment}> +</button>
                <button onClick={this.decrement}>-</button>
                <h2>Cost:{this.state.cost}</h2>
                <button onClick={this.show}>Add to Cart</button>
                <div>
                    <h1>Shopping Cart</h1>
        <h2>{this.state.list.map(list1=>{
        return(<h2>${list1.cost}</h2>)
        })}</h2>
                </div>
            </div>
        );
    }
}

export default Shopping;
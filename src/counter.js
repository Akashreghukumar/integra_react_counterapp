import React from "react";
import { Component } from "react";

class Counter extends Component{


    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }

    inc=()=>{
        let cc=this.state.count;
        this.setState({
            count:cc +1

        })
    };


    dec=()=>{
        let cc=this.state.count;
        this.setState({
            count:cc-1
        })
    };


    reset=()=>{
let cc=this.state.count;
this.setState({
    count:0
})
    };

    render(){
        return(
            <div>
                <h1>This is counter number:{this.state.count}</h1>
                <button onClick={this.inc}>Increment</button>
                
                <button onClick={this.dec}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>

        );
    }
}

export default Counter;
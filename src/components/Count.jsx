import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         message: "Click to increase count"
      }
    }

    increment(){
        this.setState(
            prevState => ({
                count: prevState.count + 10,
            }),
            () => this.setState({message: `Your count stands at ${this.state.count}`})
        )
    }

    resetCount(){
        this.setState(
            {
                count: 0,
            },
            () => this.setState({message: "Click to increase count"})
        )
    }
    render(){
        const childrenArray = React.Children.toArray(this.props.children);
        const newCount = this.state.count
        return(
            <div>
                <h1>{this.state.message}</h1>
                <p>{newCount}</p>
                <button onClick={()=>this.increment()}>Click</button>
                {newCount > 0 && newCount < 100 ? <h2>Keep clicking almost there!!</h2> : newCount === 100 ? childrenArray[0] : newCount > 100 && newCount < 200 ? <h2>Aim for 200!!</h2> : newCount === 200 ? childrenArray[1] : newCount > 200 ? this.resetCount() : ""}
            </div>
        )
    }
}

export default Count
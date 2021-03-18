import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    handelCklick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        const {count} = this.state
        return (
            <div>
               <h3>{count}</h3> 
              <button onClick={this.handelCklick}> cklick my</button>  
            </div>
        )
    }
}

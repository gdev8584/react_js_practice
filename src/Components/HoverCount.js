import React, { Component } from 'react'

export class HoverCount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
  render() {
    return (
      <div>
        <button onMouseOver={()=>this.setState({count:this.state.count+1})}>Increase {this.state.count}</button>
        {/* <button onMouseEnter={()=>this.setState({count:this.state.count-1})}>Decrese {this.state.count}</button>
        <button onMouseUp={()=>this.setState({count:this.state.count+1})}>Increase {this.state.count}</button>
        <button onMouseDown={()=>this.setState({count:this.state.count-1})}>Decrease {this.state.count}</button> */}
      </div>
    )
  }
}

export default HoverCount
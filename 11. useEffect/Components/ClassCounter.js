import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
      super(props)
      this.state = {
         count:0,
         name:""
      }
    }
    onClickhandler(){
        this.setState({
            count:this.state.count + 1
        })
    }

    onChangehandler(event){
        this.setState({
            name:event.target.value
        })
    }
    componentDidMount(){
        document.title = `You clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps,prevState){
      if(prevState.count !== this.state.count){
        console.log('Updating document title');
        document.title = `You clicked ${this.state.count} times`
      }
    }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.onChangehandler.bind(this)}/>
        <button type='button' onClick={this.onClickhandler.bind(this)}>Click {this.state.count} times</button>
        </div>
    )
  }
}

export default ClassCounter
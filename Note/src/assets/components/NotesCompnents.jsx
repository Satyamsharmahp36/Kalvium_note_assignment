import  { Component } from 'react'

export default class NotesCompnents extends Component {
    constructor(props) {
        super(props);
        // to bind the method with event handler without (). 
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }

    handleChange(e){
        this.setState({value: e.target.value});

    }

    cleanup=()=>{
        this.setState({value:""})

    }

  render() {
    return (
        <div className="container">
        <div className="input">
            <h3 id='inp'>Input</h3>
            <textarea className="input-text" onChange={this.handleChange} value={this.state.value}/>
            <button id='reset' onClick={this.cleanup}>Reset</button>
        </div>
        <div className="output">
            <h3 id='out'>Pro Note</h3>
            <div className="output-text">{this.state.value}</div>
        </div>                
    </div>
    
    )
  }
}

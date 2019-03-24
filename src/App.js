import React,{Component} from 'react';
import './App.css';
import Clock from './Clock';

class App  extends Component{
    state = {
        deadline:"31 december,2019",
        newDeadline:''
    }
    ChangeDate = ()=>{
        this.setState({deadline:this.state.newDeadline})
    }
    render(){
        return(
            <div className="App">
                <div className="App-title">
                <h3>CountDown App</h3>
                <p>{this.state.deadline}</p>
                </div>
               <Clock deadline={this.state.deadline} />    
                <div className="App-date">
                    <input 
                    onChange={event => this.setState({newDeadline:event.target.value})}
                    placeholder="new date"/>
                    <button className="btn btn-primary" onClick={()=> this.ChangeDate()}>Submit</button>
                </div>    
            </div>    
        )
    }
}
export default App;
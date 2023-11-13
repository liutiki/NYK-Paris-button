
import {Component} from "react";
import NYK from './NYK';
import Paris from './Paris';

class App extends Component{
state={
  town:true
}

  render() {
    const button=this.state.town ? "Paris" : "New-York"
    return (
<div>
  <p>{this.state.town ? <NYK /> : <Paris />}</p>
  <button onClick={() =>{this.setState({town:!this.state.town})}}className="btn">{button}</button>
</div>
    )
  }
   
}

export default App;

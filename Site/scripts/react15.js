class Calculator extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {result: 0, value1: 0, value2: 0, errormessage: ''};
        this.inputboxesChanged = this.inputboxesChanged.bind(this);
        this.addNumbers = this.addNumbers.bind(this);
    }
    
    inputboxesChanged(){
        let one = document.getElementById("value1").value;
        let two = document.getElementById("value2").value;
        
        let numOne = parseInt(one);
        let numTwo = parseInt(two);
        
        if(Number.isNaN(numOne) || Number.isNaN(numTwo)){
            this.setState({errormessage: "Ange två giltiga tal"});
        }
        
            this.setState({value1: numOne, value2: numTwo, errormessage: ''}, () => this.addNumbers());
        
    }
    

    
    addNumbers(){
        console.log("Adding numbers");
        let one = this.state.value1;
        let two = this.state.value2;
        
        let sum = one + two;
        console.log("Summan: " + sum + ", typ: " + typeof(sum));
        
        this.setState({result: sum});
        Console.log(this.state.result + ", type: " + typeof(this.state.result));
        
    }
    
    render(){
        return(
      <div><h1>Räkna</h1>
      <form>
          <input className="input-small" id="value1" value={this.state.value1} onChange={this.inputboxesChanged}/> + 
            <input className="input-small" id="value2" value={this.state.value2} onChange={this.inputboxesChanged}  /> = <Resultbox result={this.state.result}/>
      </form>
            <div>{this.state.errormessage}</div>
     </div>
        
        );
    }
}

class Resultbox extends React.Component{
    
    render(){
        return (<input className="input-small bg-result" value={this.props.result} />);
    }
}


ReactDOM.render(<Calculator/>, document.getElementById("react-div"));
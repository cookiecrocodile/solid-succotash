class Calculator extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {result: 0, value1: 0, value2: 0, errormessage: ''};
        this.inputboxesChanged = this.inputboxesChanged.bind(this);
        this.calculate = this.calculate.bind(this);
    }
    
    inputboxesChanged(){
        let one = document.getElementById("value1").value;
        let two = document.getElementById("value2").value;
        
        this.setState({value1: one, value2: two}, () => this.calculate());
    }
    

    calculate(){
        console.log("räknar");
        let one = this.state.value1;
        let two = this.state.value2;
        
        let operator = document.getElementById("opSelect").value;
        
        let numOne = parseInt(one);
        let numTwo = parseInt(two);
        
        if(Number.isNaN(numOne) || Number.isNaN(numTwo)){
            this.setState({errormessage: "Ange två giltiga tal", result: 'NaN'});
        }
        else{
            
            let sum = 0;
            
            if(operator === '+'){
                sum = numOne + numTwo;
            }
            else if(operator === '-'){
                sum = numOne - numTwo;
            }
            else if(operator === '*'){
                sum = numOne * numTwo;
            }
            else{
                sum = numOne / numTwo;
            }
            
        this.setState({result: sum, errormessage: ""});
        }
    }
    
    render(){
        return(
      <div><h1>Räkna</h1>
      <form>
          <input className="input-small" id="value1" value={this.state.value1} onChange={this.inputboxesChanged}/><OperatorSelect opselected={this.inputboxesChanged}/> 
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

class OperatorSelect extends React.Component{
   render(){
        const selection = ( <select id="opSelect" onChange={this.props.opselected} className="input-small">
  <option value="+">+</option>
  <option value="-">-</option>
  <option value="*">*</option>
  <option value="/">/</option>
</select> );
       return (selection);
   }
}

                

ReactDOM.render(<Calculator/>, document.getElementById("react-div"));
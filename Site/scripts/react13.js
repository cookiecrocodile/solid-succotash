// Uppgift 1.1
const element = (
  <h1>
    React är knasigt!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('first-div')
);

// Uppgift 1.2
//const added = (<p>Talet är: {333 + 777}</p>);

ReactDOM.render(
    (<p>Talet är: {333 + 777}</p>), 
    document.getElementById("second-div"));

// Uppgift 1.3
const multiple = (<div><h2>Flera element</h2>
                 <p>Här står det massa text, eller ja, inte så mycket egentligen.</p>
                 <ul>
                  <li>Punktlista med en punkt</li>
                  </ul></div>);
                  
ReactDOM.render(
    multiple, 
    document.getElementById("third-div")
);



//Uppgift 1.4

class MyElement extends React.Component {
  render() {
      
      const el = (<h3>{this.props.specialheader}</h3>);
      
    return el;
  }
} 

ReactDOM.render(
    <MyElement specialheader="This header text is a prop!"/>,
document.getElementById('fourth-div'));
      
/*
//lite extra test till på uppgift 4
 class MyElement2 extends React.Component {
  render() {
      
      const element = (<div className="bg-pink"><h4>{this.props.something}</h4><p>{this.props.sometext}</p></div>);
      
    return element;
  }
} 
            
ReactDOM.render(
<MyElement2 something="Render in different div" sometext="Nu kan väl bara den här idiotiska texten visas, eller?!"/>,
document.getElementById('fifth-div'));
      */
      
      
//Uppgift 2.1
      
      
let someList = ["hej", "hallå", "hejsan", "tja"];      
class MyList extends React.Component {

    render() {
        
        const newList = this.props.list.map(item => (<li key={item}>{item}</li>))
        return (<ul>{newList}</ul>);
    }
}
                
ReactDOM.render(<MyList list={someList}/>,
                document.getElementById("fifth-div"));                

//Uppgift 2.2-2.3
class Book extends React.Component{
        constructor(props){
        super(props);
        this.state = {status: "okänd"}
        this._changeStatusState = this._changeStatusState.bind(this);
    }
    
    _changeStatusState(){
        
        let statusclass;
        
        if(this.state.status =="book-unread"){
            statusclass = "book-reading";
        }
        else if(this.state.status =="book-reading"){
            statusclass = "book-finished";
        }
        else{
            statusclass = "book-unread";
        }
        
        this.setState({status: statusclass});
    }
    render(){
        
        let readstatus;
        
        if(this.state.status =="book-unread"){
            readstatus = "oläst";
        }
        else if(this.state.status =="book-finished"){
            readstatus = "läst";
        }
        else if(this.state.status =="book-reading"){
            readstatus = "läsning pågår"
        }
        else{
            readstatus = "okänd";
        }
        
        return (<p onClick={this._changeStatusState} className={this.state.status}>{this.props.author}: {this.props.title}, status: {readstatus}</p>);
    }
}

ReactDOM.render(
      (<div>
          <Book author ="Anna Anonym" title ="Min bok"/>
          <Book author ="Nemo" title ="Du vet inte vem jag är"/>
          <Book author ="Elof" title ="Elof är bäst"/>
        </div>),
        document.getElementById("sixth-div"));
        

        
        
        /*
       Flytta över status till state och lägg till en onClick funktion som byter status när användaren klickar på bok-elementet.

Ändra i render-funktionen så att den skriver ut en textsträng som förklarar vad boken har för status, till exempel "oläst" eller "läst ut".


        
        */
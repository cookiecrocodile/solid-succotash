// Uppgift 1
const element = (
  <h1>
    React är knasigt!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('first-div')
);

// Uppgift 2
const added = (<p>Talet är: {333 + 777}</p>);

ReactDOM.render(
    added, 
    document.getElementById("second-div"));

// Uppgift 3
const multiple = (<div><h2>Flera element</h2>
                 <p>Här står det massa text, eller ja, inte så mycket egentligen.</p>
                 <ul>
                  <li>Punktlista med en punkt</li>
                  </ul></div>);
                  
ReactDOM.render(
    multiple, 
    document.getElementById("third-div")
);



//Uppgift 4

class MyElement extends React.Component {
  render() {
      
      const el = (<h3>{this.props.specialheader}</h3>);
      
    return el;
  }
} 

ReactDOM.render(
    <MyElement specialheader="This header text is a prop!"/>,
document.getElementById('fourth-div'));
      
      
//Test
 class MyElement2 extends React.Component {
  render() {
      
      const element = (<div className="bg-pink"><h4>{this.props.something}</h4><p>{this.props.sometext}</p></div>);
      
    return element;
  }
} 
            
ReactDOM.render(
<MyElement2 something="Render in different div" sometext="Nu kan väl bara den här idiotiska texten visas, eller?!"/>,
document.getElementById('fifth-div'));
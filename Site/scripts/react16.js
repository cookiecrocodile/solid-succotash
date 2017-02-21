class ObjectDisplay extends React.Component{
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = { data: [], itemcount: 0};
    }
    
    render(){
        return(<div>
               <h2>hej</h2>
               <ObjectTable list={this.state.data}/>
              
               </div>);
    }
    
    componentDidMount() {
     console.log("ObjectDisplay component mounted");
     this.fetchData();
  }
        
    fetchData(){
       console.log("Fetch called");
        
        let _this = this;
        
        fetch("http://forverkliga.se/JavaScript/api/simple.php?world")
        .then(function(response){
        return response.json();
    })
        .then (function(json) {
            console.log("I've got json and I'm not afraid to use it");
            
            _this.setState({data: json, itemcount: json.length});
            console.log("ja!"); 
        });
    
            
   }
}
    
    
class ObjectTable extends React.Component{
    render(){
        
        const tablerows = this.props.list.map(x => <tr key={x.name}><td>{x.name}</td><td>{x.continent}</td><td>{x.population}</td></tr>);
        
        return(<table>
                <thead>
                    <tr>
                        <th>Land</th>
                        <th>Kontinent</th>
                        <th>Befolkning</th>
                    </tr>
               </thead>
               <tbody>
                    {tablerows}
               </tbody>
               </table>);
    }
}
    
/*

Din uppgift är att rendera en React-komponent som gör ett AJAX request och hämta en lista med JSON objekt. Börja med att välja ut ett lämpligt API. (Det är ok att använda landsinformationen på http://forverkliga.se/JavaScript/api/simple.php?world Observera att det ska vara en lista med objekt.)
AJAX ska göras när komponenten renderats första gången. Innan något svar kommit ska det stå ett lämpligt meddelande på sidan.

*/

ReactDOM.render(<ObjectDisplay/>, document.getElementById("react-div"));
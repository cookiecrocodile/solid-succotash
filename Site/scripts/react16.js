class ObjectDisplay extends React.Component{
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = { data: [], itemcount: 0};
    }
    
    render(){
        return(<div>
               <h2>Table of Countries</h2>
               <ObjectTable list={this.state.data}/>
               <p>Number of countries: {this.state.itemcount}</p>
              
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
        
        const tablerows = this.props.list.map(x => <tr key={x.name}><td>{x.name}</td><td>{x.continent}</td><td className="number-column">{x.population}</td></tr>);
        
        return(<table className="fancy-table">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Continent</th>
                        <th>Population</th>
                    </tr>
               </thead>
               <tbody>
                    {tablerows}
               </tbody>
               </table>);
    }
}
    
/*
Användaren ska kunna klicka på ett element i listan för att markera det. Då ska det dyka upp ett sätt som användaren kan ta bort elementet.
(Tips: använd conditional rendering.)


*/

ReactDOM.render(<ObjectDisplay/>, document.getElementById("react-div"));
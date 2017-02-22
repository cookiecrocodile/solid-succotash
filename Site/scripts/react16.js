class ObjectDisplay extends React.Component{
    constructor(props){
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.filterList = this.filterList.bind(this);
        this.state = { data: [], filter: ''};
    }
    
    render(){
        return(<div>
               <h2>Table of Countries</h2>
               <input id="filterbox" onChange={this.filterList}/>
               <ObjectTable list={this.state.data} removeEvent = {this.removeItem} filter={this.state.filter}/>
              
              
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
            console.log("data saved in state"); 
        });
    
            
   }

    removeItem(event){
        console.log("remove item table button clicked");
        event.stopPropagation();
        let row = event.target.parentElement.parentElement;
        console.log(row);

        let list = this.state.data;
        let newList = list.filter(x => x.name !== row.id);
        
        this.setState({data: newList});
    }
        
    filterList(event){
        let searchtext = event.target.value;
        this.setState({filter: searchtext});
    }
}
    
    
class ObjectTable extends React.Component{
    constructor(props){
        super(props);
        this.state = { count: 0};
    }
    
    render(){
        
        let filter = this.props.filter.toLowerCase();
    
        const rows = this.props.list.filter(x => x.name.toLowerCase().includes(filter) || x.continent.toLowerCase().includes(filter)).map(x => <ObjectTableRow key={x.name} item={x} clickEvent={this.props.removeEvent}/>);

        return(<table className="fancy-table">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Continent</th>
                        <th>Population</th>
                    </tr>
               </thead>
               <tbody>
               {rows}
                <tr key="numrow" className="bottom-row"><td colSpan="3">Number of countries: {rows.length}</td></tr>
             </tbody>
               </table>);
    }
}


                   
                   
class ObjectTableRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {clicked: false};
        this.setClickedState = this.setClickedState.bind(this);
         }
        
setClickedState(){
     
    if(this.state.clicked === false){
        this.setState({class: "test", clicked: true});
    }
    else{
       this.setState({class: "", clicked: false});
    }   
}
        
render(){
    
    const item = this.props.item;
    let row;
    
    if(this.state.clicked === false){
        row =(<tr key={item.name} id={item.name}  onClick={this.setClickedState}><td>{item.name}</td><td>{item.continent}</td><td className="number-column">{item.population}</td></tr>);
    }
    else {
        row = (<tr key={item.name} id={item.name} onClick={this.setClickedState}><td>{item.name}</td><td>{item.continent}</td><td className="number-column">{item.population}</td><td><button onClick={this.props.clickEvent}>Remove row</button></td></tr>);
    }
    /*
    return(<tr key={item.name} id={item.name} className={this.state.class} onClick={this.setClickedState}><td>{item.name}</td><td>{item.continent}</td><td className="number-column">{item.population}</td></tr>); */
    
    return row;
    }
}                


ReactDOM.render(<ObjectDisplay/>, document.getElementById("react-div"));
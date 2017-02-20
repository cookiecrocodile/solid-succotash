let wordlist = ["apa", "lapa", "gapa", "rapa", "skapa"];
let translations = [{word: "katt", translation: "cat" }, 
                    {word: "hund", translation: "dog" }, 
                    {word: "marsvin", translation: "guinea pig" }, 
                    {word: "guldfisk", translation: "goldfish" }];

class MyList extends React.Component {
    render(){
        const renderlist = this.props.list.map(x => <li key={x}>{x}</li>);
        return (<div><h3>Lista med ord</h3><ul>{renderlist}</ul></div>);
    }
}
                                               
ReactDOM.render(
        <MyList list={wordlist}/>, 
        document.getElementById("react-div")
        );                                            
        

class TranslationList extends React.Component {
    render() {
        const itemlist = this.props.list.map(obj => <li key={obj.word}>{obj.word} = {obj.translation}</li>);
        return (<div><h3>Lista med objekt</h3><ul>{itemlist}</ul></div>);
    }
}
                                             
ReactDOM.render(
            <TranslationList list={translations}/>, 
            document.getElementById("react-div2"));
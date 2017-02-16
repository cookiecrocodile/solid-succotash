let btnFetch = document.getElementById("btnFetchAnswers");

let divPeople = document.getElementById("div1");
let divEurope = document.getElementById("div2");
let divWomen = document.getElementById("div3");
let divFewest = document.getElementById("div4");
let divContinent = document.getElementById("div5");

let womZim = 0;
let leastPpl = "";
let mostPpl = "";

btnFetch.addEventListener("click", function(){
    fetch("http://forverkliga.se/JavaScript/api/simple.php?world=whatever")
    .then(function(response){
        return response.json();
    })
    .then (function(json) {
                
        for(let o of json){
            
            var smallest = Infinity;
            
            if(o["name"] === "Zimbabwe"){
                womZim = o["population"] * o["pFemale"];
            }
            
            if(o["population"] < smallest){
                smallest = o["population"];
                leastPpl = o["name"];
            }  
        }
        
        let eu = json.filter(obj => obj.continent === "Europe").reduce((a, b) => ({continent: "Europe", population: a.population + b.population}));
        let af = json.filter(obj => obj.continent === "Africa").reduce((a, b) => ({continent: "Africa", population: a.population + b.population}));
        let as = json.filter(obj => obj.continent === "Asia").reduce((a, b) => ({continent: "Asia", population: a.population + b.population}));
        let oc = json.filter(obj => obj.continent === "Oceania").reduce((a, b) => ({continent: "Oceania", population: a.population + b.population}));
        let sa = json.filter(obj => obj.continent === "South America").reduce((a, b) => ({continent: "South America", population: a.population + b.population}));
        let na = json.filter(obj => obj.continent === "North America").reduce((a, b) => ({continent: "North America", population: a.population + b.population}));
        let worldpoulation = json.reduce((a, b) => ({population: a.population + b.population}));
            
        let continentPops = [eu, af, as, oc, sa, na];
        continentPops = continentPops.sort((a, b) => a.population - b.population);
        mostPpl = continentPops.pop();
                
        divPeople.innerText = worldpoulation.population;
        divEurope.innerText = eu.population;
        divWomen.innerText = womZim;
        divFewest.innerText = leastPpl;
        divContinent.innerText = mostPpl.continent;
    });
});
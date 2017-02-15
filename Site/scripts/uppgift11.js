let btn = document.getElementById("btnRequest");
let div = document.getElementById("divResult");

let btnFetch = document.getElementById("btnFetch");
let divFetch = document.getElementById("divFetchResult");

let btnQuery = document.getElementById("btnFetchQuery");
let divQuery = document.getElementById("divQuery");


btn.addEventListener("click", function(){
    let ajax = new XMLHttpRequest();
    ajax.open('get', "http://forverkliga.se/JavaScript/api/simple.php");
    ajax.onreadystatechange = function() {
    if(ajax.status == 200 && ajax.readyState == 4)
       
        var responseObject = JSON.parse(ajax.responseText);
        
        console.log(ajax.responseText);
        console.log(responseObject);
        
        for(let x in responseObject){
            
            div.innerHTML += `${x}: ${responseObject[x]}<br/>`
        }
    }
    ajax.send();
});

btnFetch.addEventListener("click", function(){
    fetch("http://forverkliga.se/JavaScript/api/simple.php")
        .then(function(response) {
        return response.json(); // JSON Promise
    })
        .then(function(json) {
   
            for(let p in json){
               
                divFetch.innerHTML += `${p}: ${json[p]}<br/>`;
            }      
    });
});


btnQuery.addEventListener("click", function(){
    fetch("http://forverkliga.se/JavaScript/api/simple.php?key=value")
        .then(function(response) {
        return response.json(); // JSON Promise
    })
        .then(function(json) {
   
            for(let p in json){
                
                divQuery.innerHTML += `${p}: ${json[p]}<br/>`
            }
        
    });
});
let btn = document.getElementById("btnAdd");
let list = document.getElementById("listOne");
let input = document.getElementById("inputbox");
let btnChange = document.getElementById("btnChange");
let btnRemove = document.getElementById("btnRemove");


let addToList = function(){
    
    let text = input.value;
    let li = document.createElement("LI");
    let textnode = document.createTextNode(text);
    li.appendChild(textnode);
    list.appendChild(li);
    input.value = "";  
}

let changeInputField = function(e){
    
    var item = e.target;
    input.value = item.innerHTML;  
}

let changeLiColor = function(e){

    var li = e.target;
    var listItems = list.getElementsByTagName("li");
    
    for(let x of listItems){
        x.className = "bg-none";
    }
    
    li.className = "bg-pink";
    
}

let changeLiText = function(){
    
    let text = input.value;
    
    let liToChange = document.getElementsByClassName("bg-pink")[0];
    
    liToChange.innerText = text;
    liToChange.className = "bg-none";
}

let removeItem = function (){
    var li = document.getElementsByClassName("bg-pink")[0];
    list.removeChild(li);
}


btn.addEventListener("click", addToList);
list.addEventListener("click", changeInputField);
list.addEventListener("click", changeLiColor);
btnChange.addEventListener("click", changeLiText);
btnRemove.addEventListener("click", removeItem);

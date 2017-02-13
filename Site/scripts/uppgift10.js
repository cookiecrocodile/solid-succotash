let btn = document.getElementById("btnAdd");
let list = document.getElementById("listOne");
let input = document.getElementById("inputbox");


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
    
    if(li.classList.contains("bg-pink")){
        li.className = "bg-none";
    }
    else{
        li.className = "bg-pink";
    }
}


btn.addEventListener("click", addToList);
list.addEventListener("click", changeInputField);
list.addEventListener("click", changeLiColor);

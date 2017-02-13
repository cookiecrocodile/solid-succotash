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


let changeInput = function(e){
    
    let item = e.target;
    input.value = item.innerHTML;    
}



btn.addEventListener("click", addToList);
list.addEventListener("click", changeInput);


/*
<!-- Skriv ett HTML-dokument som innehåller följande element: en textruta, en knapp och en lista. När man klickar på knappen så ska det läggas till ett nytt element sist i listan, som har samma text som den som står i textrutan. När man klickar på någon av elementen i listan så ska texten i textrutan ersättas med det som står i elementet man klickade på. Dessutom så ska elementen i listan byta bakgrundsfärg när man klickar på dem. --> */
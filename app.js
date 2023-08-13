let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click" ,function(){
   let item=document.createElement("li");
   if(input.value==""){
    alert("enter");
   }
   else{
   item.innerHTML=input.value;
   let delbtn =document.createElement("button");
   delbtn.innerText="Delete";
   delbtn.classList.add("Delete");
   item.appendChild(delbtn);
ul.appendChild(item);
    input.value=" ";
   }
});

ul.addEventListener("click" ,function(event){
    if(event.target.nodeName == "BUTTON"){
        let ListItem=event.target.parentElement;
        ListItem.remove();
        console.log("deleted");
    }
});

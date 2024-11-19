let n=document.getElementById("result")

function validate(value){
            n.textContent=n.textContent === "0"? value : n.textContent +value;
}

function clearResult(){
    n.textContent='0'
    console.log(n.textContent);
}

function calculate(){
       n.textContent=eval(n.textContent)
       console.log(n.textContent);
       
}


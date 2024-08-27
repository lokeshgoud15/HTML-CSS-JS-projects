

const btns=document.querySelectorAll('button');

const inputF=document.getElementById('result');


for(let i=0;i<btns.length;i++){

    btns[i].addEventListener('click',()=>{
       const btnValue=btns[i].textContent;
       if(btnValue==="C"){
        clearResult();
       }
       else if(btnValue==="="){
        calculateResult();
       }
       else{
        appendValue(btnValue);
       }

    })

}

function clearResult(){
    inputF.value="";
}
function  calculateResult(){
    inputF.value=eval(inputF.value)

}
function  appendValue(btnValue){
    inputF.value=inputF.value+ btnValue ;

}
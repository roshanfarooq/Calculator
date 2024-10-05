let string = "";
let memory=0;

let button=document.querySelectorAll("button");
let input=document.querySelector(".inp");

button.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    if(btn.innerHTML=="="){
       string = eval(string);
      input.value=string;
    }
    else if(btn.innerHTML== "C"){
      string="";
      input.value=string;
      memory=0;
      
    }
    else if(btn.innerHTML=="M+"){
        
      if(input.value !== ''){
        memory=memory+Number(input.value);
      }
      console.log(memory)
      string="";
      input.value=string;  
      }
      else if(btn.innerHTML=="MR"){
      
      input.value=memory;
        
      }
        else if(btn.innerHTML=="M-"){

        if(input.value !== ''){
          memory=memory-Number(input.value);
        }
          console.log(memory);
        string="";
        input.value=string;  
        }
      
      
    else{
    string = string + btn.innerHTML;
     input.value=string;
    }
  })
})
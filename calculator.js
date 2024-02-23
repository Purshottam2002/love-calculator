 document.getElementById('calculate').addEventListener('click',function(){
    const firstname = document.getElementById("firstname").value.trim();
    const secondname = document.getElementById("secondname").value.trim();
    const colors = ["red","blue","green","yellow","violet","pink","brown","grey"];
    var lovepercent;
 if(firstname === "" || secondname === ""){
    alert("please enter the both names.");
    return;
 }
 else if (firstname === "akash" || secondname === "akash"){
   lovepercent = Math.floor(Math.random()*10)+91;
 }
 else{
   lovepercent = Math.floor(Math.random() *100)+1;
}

 const random = Math.floor(Math.random()*7);
 document.body.style.backgroundColor = colors[random];

 const resultText = `${firstname} and ${secondname} have ${lovepercent}% compatibility`;
 
 document.getElementById('calculate').textContent = resultText;
 console.log(resultText)

 var Res = "";
 
 if(lovepercent<70){
   Res = "god bless you";
   }
 else if(lovepercent<50){
    Res = "be strong";
   }
 else if(lovepercent>40){
   Res = "always be happy";
   }
   document.getElementById('percent').textContent = Res;
   console.log(Res)
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 

const binary = document.querySelector("input");
const btn = document.querySelector("button");


// btn.addEventListener("click", (event) =>{
//  const myLen = binary.value;
// let myArry = [];
// let myArryB = [128,64,32,16,8,4,2,1];
// let myArryC = [];
// let count = 0;
// const myL = 8 - myLen.length  ;

// for (let j = 0; j < myL; j++) {
//     myArry += ["0"];
    
// }
//  for (let i = 0; i < 8; i++) {
    
//      myArry  += [ myLen[i]]; 
//      if(myArry[i] == 1){
//          myArryC += myArry[i].replace(myArry[i],myArryB[i]);
//             count += myArryB[i];
         
         
//     }else if(myArry[i] == 0){
//         myArryC += myArry[i].replace(myArry[i],"0");
//     }else{
//         alert("please insert binary number");
//         binary.value = ""; 
//     }
// }
// const p = document.querySelector("p");
// p.textContent = "The value of binary to decimal is : " + myArryC; 
// console.log("result : " + count);



// })
binary.addEventListener("keyup",(event)=>{
    const myLen = binary.value;
let myArry = [];
let myArryB = [128,64,32,16,8,4,2,1];
let myArryC = [];
let count = 0;
const myL = 8 - myLen.length  ;

for (let j = 0; j < myL; j++) {
    myArry += ["0"];
    
}
 for (let i = 0; i < 8; i++) {
    
     myArry  += [ myLen[i]]; 
     if(myArry[i] == 1){
         myArryC += myArry[i].replace(myArry[i],myArryB[i]);
            count += myArryB[i];
         
         
    }else if(myArry[i] == 0){
        myArryC += myArry[i].replace(myArry[i],"0");
    }else{
        alert("please insert binary number");
        binary.value = ""; 
    }
}
const p = document.querySelector("p");
const myRst = document.querySelector("h2");
p.textContent = "The value of binary to decimal is : " + myArryC; 
myRst.textContent = `Value of ${myLen} in Decimal: ${count}`;

console.log("result : " + count);

})  
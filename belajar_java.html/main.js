let bintang = "*"
let result =""

for (let i=0; i<=5; i++){
    for(let j=0; j<=i; j++){

        result+=bintang
    }
    result+="\n"
}
console.log(result);
// let number=[1,6,9,14,4,15,13,25,17];
//           let swapped;
//           do{
//               swapped=false;
//               for(let i=0;i<number.length;i++){
//                   let leftElement=number[i];
//                   let rightElement=number[i+1];
//                   let tampung;

//                   if(leftElement>rightElement){
//                       tampung=leftElement;
//                       number[i]=rightElement;
//                       number[i+1]=tampung;

//                       swapped=true;
//                   }
//                   //console.log(number;)
//               }
//           }while(swapped);
//           console.log(number);
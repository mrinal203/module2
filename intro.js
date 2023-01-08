console.log(" sawagt hia aapk aaj ke padhai me ");
//variable is js 
// it is a contaner that use to store some values in memory area .
// let z =99;
// console.log(z);
// let str = ' my name is gaurav '// stirng 
// console.log(str);

// let bool = true ;
// console.log(bool);
// loop
// when ever we need repitation need
// use loop ---------
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log("-----------------------");
// //-----------------
// for( let i=1; i<=5;i++){
//     console.log(i);
// }
//----------while loop
// let count =10;
// while(count>0){
//     console.log(count);
//     count--;
// }
//--------------------------------------------
// Is prime number
function Isprime(n){
    let count =0;
    for( let i=2; i*i<=n;i++){
        if(n%i==0){
            count++;
            break;
        }
    }
    if(count>0){
        return false;
    }else{
        return true ;
    }
} 
let b = Isprime(11 );
if(b){
    console.log("Yes it is a prime number ");
}else {
    console.log("No it is not prime number ");
}

var a=10;
var b=20;
var c=30;
console.log((a>b)?"a is greater":"a is not graeter");
console.log("Wajsp to find second largest number")
if(a>b && a<c || a>c && a<b ){
        console.log("a is second greater")
}
else if(b>a && b<c || b>c && b<a){
    console.log("b is second greater")
}
else{
    console.log("c is second greater")
}
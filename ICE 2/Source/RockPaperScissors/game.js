x=Math.random();

console.log(" my choice is rock");
if(x<0.3) {
    console.log("computer has choosen paper");
}
else if(0.3<x<0.6){
    console.log("computer has choosen scissors");
}
else{
    console.log("computer has choosen rock");
}
if(x<0.6){
    console.log("win");
}
else{
    console.log("tie");
}
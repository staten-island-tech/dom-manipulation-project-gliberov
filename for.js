for(let i =0; i < 7; i++){
    console.log(i);
    for(let j =0; j <3; j++) {
        console.log(j);
    }
}
let money = 100
while(money > 0){
    console.log("let it ride", money);
    money--;
}
arr = [1,2,3,4,5,6,7,8,9,10,11,12,12,14,15,16,17,18,19,20]
function linearSearch(num,arr){
    for(let i=0; i < arr.length; i++){
        if (arr[i] === num) {
            found = arr[i];
            break;
        } else{
            console.log("Still Looking");
        }

    }
    if (!found) {
        console.log("sorry I couldn't find it")
    }
    return found;
}
linearSearch(70, arr);
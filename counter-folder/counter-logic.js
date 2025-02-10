let x =0;
function count_num(n){
    window.navigator.vibrate(1000);
if(n==0){
    x=0;
    let output = document.querySelector("#ans");
    output.innerHTML = 0;
}
else if(n==1){
    x++;
    let output = document.querySelector("#ans");
    output.innerHTML = x;
    console.log(x);
}
else if(n==-1&&x>0){
    x--;
    let output = document.querySelector("#ans");
    output.innerHTML = x;
}
}

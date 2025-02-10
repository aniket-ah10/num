let x =0;
function count_num(n){
if(n==0){
    window.navigator.vibrate([50,10,50])
    x=0;
    let output = document.querySelector("#ans");
    output.innerHTML = 0;
}
else if(n==1){
    window.navigator.vibrate([30,10,30]);
    x++;
    let output = document.querySelector("#ans");
    output.innerHTML = x;
    console.log(x);
}
else if(n==-1&&x>0){
    window.navigator.vibrate([25,7,25,7,25]);
    x--;
    let output = document.querySelector("#ans");
    output.innerHTML = x;
}
}

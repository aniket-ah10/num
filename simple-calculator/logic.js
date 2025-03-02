let s='';
addEventListener("keypress",function(event){
    if(event.key=='0'||event.key=='1'||event.key=='2'||event.key=='3'||event.key=='4'||event.key=='5'||event.key=='6'||event.key=='7'||event.key=='8'||event.key=='9'||event.key=='.'||event.key=='+'||event.key=='-'||event.key=='/'||event.key=='*'){
        s=event.key;
        extractnumber(s);
    }
});
let c ='';
let num =[];
let n="";
function extractnumber(s){
    let f =0;
    for(let a=0;a<n.length;a++){
        if(n.charAt(a)=='.')
            f=1;
    }
    if(!(f==1&&s=='.'))
    n+=s;
    if(n.charAt(0)=='0'||n.charAt(0)=='*'||n.charAt(0)=='/'){
        n="";
    }
    if(n.charAt(n.length-1)=='+'||n.charAt(n.length-1)=='-'||n.charAt(n.length-1)=='*'||n.charAt(n.length-1)=='/'){
        num.push(n.substring(0,n.length-1));
        num.push(n.charAt(n.length-1));
        n="";
    }
    let z=0;
    let temp="";
    if(!num[3]==""){
    switch(num[1]){
        case '+':
            z=parseFloat(num[0])+parseFloat(num[2]);
            temp= num[3];
            num=[z,temp];
            console.log(z);
        break;
        case '-':
            z=parseFloat(num[0])-parseFloat(num[2]);
            temp= num[3];
            num=[z,temp];
            console.log(z);
        break;
        case '*':
            z=parseFloat(num[0])*parseFloat(num[2]);
            temp= num[3];
            num=[z,temp];
            console.log(z);
        break;
        case '/':
            z=parseFloat(num[0])/parseFloat(num[2]);
            temp= num[3];
            num=[z,temp];
            console.log(z);
        break;
    }}
    document.querySelector(".ans").value="";
    for(let a=0;a<num.length;a++){
        document.querySelector(".ans").value +=num[a]
    }
    document.querySelector(".ans").value += n;
    /*if(!(n.charAt(n.length-1)=='+'||n.charAt(n.length-1)=='-'||n.charAt(n.length-1)=='/'||n.charAt(n.length-2)=='*')&&(n.charAt(n.length-2)=='+'||n.charAt(n.length-2)=='-'||n.charAt(n.length-2)=='/'||n.charAt(n.length-2)=='*')){
        num.push(n.substring(0,n.length-2));
        num.push(n.charAt(n.length-2));
        console.log(n);
        n+=n.charAt(n.length-1);
    }
    if((n.charAt(n.length-1)=='+'||n.charAt(n.length-1)=='-'||n.charAt(n.length-1)=='/'||n.charAt(n.length-2)=='*')&&(n.charAt(n.length-2)=='+'||n.charAt(n.length-2)=='-'||n.charAt(n.length-2)=='/'||n.charAt(n.length-2)=='*')){
        n="";
    }
    if(num.length==4){
        let a =0;
        if(num[1]==="+"){
            a=parseFloat(num[0])+parseFloat(num[2]);
        }
        else if(num[1]==="-"){
            console.log(num[0]-num[2])
        }
        if(num[1]==="*"){
            console.log(num[0]*num[2])
        }
        if(num[1]==="/"){
            console.log(num[0]/num[2])
        }
        num=[];
        console.log(a);
    }*/
}
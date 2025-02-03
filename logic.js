function fun1(){
    let start = document.querySelector("#start_date");
    let end = document.querySelector("#end_date");
    start = start.value;
    end = end.value;
    console.log(start.length);
    if(start.length===10&&end.length===10)
    fun2();
}
function fun2(){
let out_put=document.querySelector(".output_style");
out_put.style.visibility="visible";
let start = document.querySelector("#start_date");
let end = document.querySelector("#end_date");
start= start.value;
end = end.value;
let temp1 = "",temp2=0;
let s_arr = [],e_arr = [];
for(let i = 0;i<10;i++){
    if(start.charAt(i)==="-"){
        
        s_arr.push(Math.round(temp1));
        temp1 = "";
        e_arr.push(Math.round(temp2));
        temp2 = "";
    }
    else{
    temp1 = temp1 + start.charAt(i);
    temp2 = temp2 + end.charAt(i);
    }
}
s_arr.push(Math.round(temp1));
e_arr.push(Math.round(temp2));
year_arr = [366,365,365,365];
let arr = [31,31,28,31,30,31,30,31,31,30,31,30,31];
let day =0;
let days1=0,days2=0,day1=0,day2=0,sum = 0,year=0,month=0;
year = e_arr[0]-s_arr[0]-1;
let t_year= s_arr[0]+year; // temporary year for calculation


    if(e_arr[1]>s_arr[1]){
        year++;
        t_year++;
        month=e_arr[1]-s_arr[1]-1;
        let t_month=s_arr[1]+month;
        if(e_arr[2]>=s_arr[2]){
            month++;
            t_month++;
            day=e_arr[2]-s_arr[2];
        }
        else
        day=arr[e_arr[1]-1]-s_arr[2]+e_arr[2];
    }
    else if(e_arr[1]==s_arr[1]){
        if(e_arr[2]>=s_arr[2]){
            year++;
            t_year++;
            day = e_arr[2]-s_arr[2];
        }
        else{
            month=11;
            day=arr[e_arr[1]]-s_arr[2]+e_arr[2];
        }
        }
        else if(e_arr[1]<s_arr[1]){
            month = 11-s_arr[1]+e_arr[1];
            if(e_arr[2]>=s_arr[2]){
                month++;
                day=e_arr[2]-s_arr[2];
            }
            else
            {
                day=arr[e_arr[1]-1]-s_arr[2]+e_arr[2];
            }
        }
for(let p = s_arr[0];p<e_arr[0];p++){
    if((e_arr[0]-p)!=1){
        sum = sum + year_arr[(p+1)%4];
    }
    else{
        day1 = year_arr[s_arr[0]%4];
        day2 = year_arr[e_arr[0]%4];
        for(let a = 1; a<s_arr[1];a++){
            days1 = days1+arr[a];
        }
        days1 = days1+ s_arr[2];
        day1 = day1- days1;
        for(let a = 12;a>e_arr[1];a--){
            days2 =days2+arr[a];
        }
        days2 = days2+ arr[e_arr[1]]-e_arr[2];
        day2 = day2- days2;
        sum = sum +day1+day2;
    }
}
if(e_arr[0]==s_arr[0]){
    if(s_arr[0]%4==0){
        arr[2]=29;
    }
    for(let a= 1;a<s_arr[1];a++){
        days1 = days1+ arr[a];
    }
    days1 = days1+ s_arr[2];
    for(let a= 12;a>e_arr[1];a--){
        days2= days2+arr[a];
    }
    days2 = days2 + arr[e_arr[1]]-e_arr[2];
    sum = year_arr[s_arr[0]%4]-days1-days2;
}
//display output
let l_year = document.querySelector("#year");
let l_days = document.querySelector("#days");
let l_hour =document.querySelector("#hour");
let l_min = document.querySelector("#min");
let l_sec =document.querySelector("#sec");
l_year.innerHTML =`Age » ${year} year ${month} month ${day} days`;
l_days.innerHTML = `Days » ${sum} days`;
l_hour.innerHTML =  `Hours » ${sum*24} hours`;
l_min.innerHTML = `Minutes » ${sum*24*60} minutes`;
l_sec.innerHTML = `Second » ${sum*24*60*60} second`;
}
//sumbiting by enter key
let input = document.getElementById("#submit");
input.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        fun1();
    }
});
//reset function 
function fun_reset(){
    let out_put=document.querySelector(".output_style");
    out_put.style.visibility="hidden";
}

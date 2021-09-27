console.log("script connected succesfully");

let emparray = new Array();
emparray=[];
let clickcount=0;


document.getElementById("btn").addEventListener("click",emp);
function emp(){
   ++clickcount;
  console.log(clickcount);
  let  fname=document.getElementById("fn").value;
  let lname=document.getElementById("ln").value;
  
  let eid=clickcount;
  
  let ot= parseInt(document.getElementById("oth").value);
  
  let  wdays=parseInt(document.getElementById("wd").value);
  
  addemp(fname,lname,eid,wdays,ot);
  var pp = document.createElement("P");
var t = document.createTextNode("Employee ID:"+clickcount +"  employee  name;"+emparray[clickcount-1].firstname+" "+emparray[clickcount-1].lasttname+
"  working days"+emparray[clickcount-1].WorkingDays+"  over time :"+emparray[clickcount-1].overTime);
pp.appendChild(t);
document.body.appendChild(pp);




}



  function addemp(fname,lname,eid,wdays,ot)
  {
    let empObj = new Object();
    empObj={
      firstname:fname,
      lasttname:lname,
      employeeid:eid,
      overTime:ot,
      WorkingDays:wdays,
    }
    addinarray(empObj);  // can we pass a map as parameter ??
    
  }


// //  array creation for each employee


function addinarray(obj){
  
  emparray.push(obj);
  for(let i=0; i<clickcount; i++){
    console.log("employe "+(i+1)+" data")
    console.log("index: "+i);
    console.log("emp id: "+(i+1));
    console.log("employee name is: "+emparray[i].firstname+" " +emparray[i].lasttname);
    console.log("employee wdays: "+emparray[i].WorkingDays);
    console.log("employee over time hours: "+emparray[i].overTime);
    console.log("end of employe "+(i+1)+" data")
  
    
}
alert("data  saved");
}






// // --------------------- Part 2 salary calculation and display ---------------------------//
document.getElementById("btncal").addEventListener("click" ,calsal);



function calsal(){
  
  let empid=parseInt( document.getElementById("calcempid").value)-1;
  
  let payable=emparray[empid].WorkingDays*500;

  
  
  let overtimepay=emparray[empid].overTime*100;
  let totalpayable=payable+overtimepay;
  
  // outputothr
  document.getElementById("outputEname").innerHTML=emparray[empid].firstname+" "+emparray[empid].lasttname;
  document.getElementById("outputwdays").innerHTML=emparray[empid].WorkingDays;
  document.getElementById("outputothr").innerHTML=emparray[empid].overTime;
  document.getElementById("ttlpay").innerHTML=totalpayable;
}


